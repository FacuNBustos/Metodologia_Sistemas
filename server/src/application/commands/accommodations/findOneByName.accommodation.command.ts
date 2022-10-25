import Joi from "joi";

export class findOneByNameAccommodationCommand {
    private readonly name: string;
  
    public constructor(
      name: any
    ) {

      const validName = Joi.object({
        name: Joi.string().min(3).alphanum().required()
      })

      const error = validName.validate({
        name: name
      }).error;
      if (error) throw new Error(error.message);
     
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
  }