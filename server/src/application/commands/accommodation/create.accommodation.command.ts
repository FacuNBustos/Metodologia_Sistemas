class CreateAccommodationCommand {
  private readonly name: string;
  private readonly pricePerNight: number;

  constructor(name: string, pricePerNight: number) {
    
    if (!name || !pricePerNight) {
      throw new Error('name and price per night are required');
    }

    this.name = name;
    this.pricePerNight = pricePerNight;
  }

  getname() : string {
    return this.name;
  }

  getpricePerNight() : number {
    return this.pricePerNight;
  }
}

export default CreateAccommodationCommand