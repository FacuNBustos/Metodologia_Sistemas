
export class findOneByNameAccommodationCommand {
    private readonly name: any;
  
    public constructor(
      name: any,
    ) {
  
      if (!name) {
        throw new Error('Name is required');
      }

      if (typeof name !== "string") {
        throw new Error("name param must be string");
      }
     
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  }