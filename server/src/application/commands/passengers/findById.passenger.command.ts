import Joi from "joi";

export class findByIdPassengerCommand {
    private readonly id: string;
  
    public constructor(
      id: string,
    ) {
      const validId = Joi.string().uuid().required();

      validId.validate(id);
     
      this.id = id;
    }
  
    getId() {
      return this.id;
    }
  }
  