import Joi from "joi";
import { Undefinable } from "../../../domain/valueObjects/Undefinable";

export class findByNameAndFromDateBookingCommand {
    private readonly name: string;
    private readonly date: Date;
  
    public constructor(
      name: Undefinable<any>,
      date: Undefinable<any>
    ) {

      if (typeof date != "string") {
        throw new Error("date sintax error")
      };

      const toDateArray = date.trim().split("-").map((item) => {
        return Number(item)
      });

      const validNameAndDate = Joi.object({
        name : Joi.string().min(3).max(50).required(),
        date: Joi.array().items(
          Joi.number().min(2000).required(),
          Joi.number().min(1).max(12).required(),
          Joi.number().min(1).max(31).required()
      ).max(3).required(),     
      });

      const { error, value } = validNameAndDate.validate({
        name : name,
        date : toDateArray,
      });
      if (error) throw new Error(error.message);

      const toDate = new Date(value.date[0],value.date[1],value.date[2]);

      this.name = name;
      this.date = toDate;
    }
  
    getName(): string {
      return this.name;
    };

    getDate(): Date {
        return this.date;
    }
  }
  