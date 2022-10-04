

export class findByNameAndFromDateBookingCommand {
    private readonly name: string;
    private readonly date: Date;
  
    public constructor(
      name: string,
      date: Date
    ) {

        this.name = name;
        this.date = date;
    }
  
    getName() {
      return this.name;
    };

    getDate() {
        return this.date;
    }
  }
  