export class findOneByIdAccommodationCommand {
  private readonly id: string;

  public constructor(id: string) {
    
    if (!id) {
      throw new Error('Id is required');
    }
   
    this.id = id;
  }

  getId() {
    return this.id;
  }
}