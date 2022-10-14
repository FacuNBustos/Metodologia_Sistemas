
export class findOneByNameAccommodationCommand {
    private readonly name: string;
  
    public constructor(
      name: string,
    ) {
  
      if (!name) {
        throw new Error('Name is required');
      }
     
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  }