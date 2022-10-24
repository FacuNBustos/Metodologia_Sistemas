import { Undefinable } from "../../../domain/valueObjects/Undefinable";

export class findByNameAndFromDateBookingCommand {
    private readonly name: string;
    private readonly date: Date;
  
    public constructor(
      name: Undefinable<any>,
      date: Undefinable<any>
    ) {
        if (!name || !date) throw new Error("name and date are required");
        if (typeof name !== "string" || typeof date !== "string") throw new Error("name or date format errro");

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
  