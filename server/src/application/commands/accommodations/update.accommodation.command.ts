export class UpdateAccommodationCommand {
    private readonly name: string;
    private readonly pricePerNight: number;

    constructor (
        name: string,
        pricePerNight: number,
        
    ) {
        if (!(name)) {
            throw new Error("it must be a valid name");
        }

        if(!pricePerNight) {
            throw new Error("Must provide an price per night");
        }

        this.name=name;
        this.pricePerNight=pricePerNight;

    }

    getName() : string {
        return this.name;
      }
    
      getPricePerNight() : number {
        return this.pricePerNight;
      }

    
}