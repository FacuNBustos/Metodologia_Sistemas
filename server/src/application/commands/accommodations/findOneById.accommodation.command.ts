import Joi from "joi";

export class findOneByIdAccommodationCommand {
  private readonly id: string;

  public constructor(id: string) {
    
    const validId = Joi.string().uuid().required();

    const error = validId.validate(id).error;
    if (error) throw new Error(error.message);
   
    this.id = id;
  }

  getId() {
    return this.id;
  }
}