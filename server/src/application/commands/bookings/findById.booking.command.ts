
export class findByIdBookingCommand {
    private readonly id: string;
  
    public constructor(
      id: string,
    ) {
     
      this.id = id;
    }
  
    getId() {
      return this.id;
    }
  }
  