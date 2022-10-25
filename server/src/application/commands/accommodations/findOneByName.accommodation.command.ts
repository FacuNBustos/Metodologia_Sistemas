import Joi from "joi";

export class findOneByNameAccommodationCommand {
    private readonly name: string;
  
    public constructor(
      name: any
    ) {

      const validName = Joi.object({
        name: Joi.string().min(3).alphanum().required()
      })

      validName.validate({
        name: name
      })
     
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
  }