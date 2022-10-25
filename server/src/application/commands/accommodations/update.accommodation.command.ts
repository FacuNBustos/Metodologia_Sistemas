import Joi from "joi";

export class UpdateAccommodationCommand {
    private readonly id: string;
    private readonly name: string;
    private readonly pricePerNight: number;

    constructor (
        id:string,
        name: string,
        pricePerNight: number,
    ) {
        const validObject = Joi.object({
            id: Joi.string().uuid().required(),
            name: Joi.string().alphanum().min(3).max(50).required(),
            pricePerNight: Joi.number().min(0).required()
        })
        
        const error = validObject.validate({
            id: id,
            name: name,
            pricePerNight:pricePerNight
        }).error;
        if (error) throw new Error(error.message);

        this.id=id;
        this.name=name;
        this.pricePerNight=pricePerNight;

    }
    getId(): string {
        return this.id;
    }

    getName() : string {
        return this.name;
      }
    
      getPricePerNight() : number {
        return this.pricePerNight;
      }

    
}