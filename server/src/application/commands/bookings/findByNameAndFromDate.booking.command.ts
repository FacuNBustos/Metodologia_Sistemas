import Joi from "joi";
import { Undefinable } from "../../../domain/valueObjects/Undefinable";

export class findByNameAndFromDateBookingCommand {
    private readonly name: string;
    private readonly date: Date;
  
    public constructor(
      name: Undefinable<any>,
      date: Undefinable<any>
    ) {

      const validNameAndDate = Joi.object({
        name : Joi.string().min(3).max(50).alphanum().required(),
        date : Joi.string().alphanum().required(),        
      })

      const error = validNameAndDate.validate({
        name : name,
        date : date,
      }).error;
      if (error) throw new Error(error.message);

      this.name = name;
      this.date = new Date(date);
    }
  
    getName(): string {
      return this.name;
    };

    getDate(): Date {
        return this.date;
    }
  }
  