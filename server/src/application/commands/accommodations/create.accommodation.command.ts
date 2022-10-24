import Joi, { valid } from "joi";

class CreateAccommodationCommand {
  private readonly name: string;
  private readonly pricePerNight: number;

  constructor(name: string, pricePerNight: number) {
    const validObject = Joi.object({ 
      name: Joi.string().alphanum().min(3).max(50).required(),
      pricePerNight: Joi.number().min(0).required()
    });

    validObject.validate({
      name: name,
      pricePerNight: pricePerNight
    });

    this.name = name;
    this.pricePerNight = pricePerNight;
  }

  getName() : string {
    return this.name;
  }

  getPricePerNight() : number {
    return this.pricePerNight;
  }
}

export default CreateAccommodationCommand