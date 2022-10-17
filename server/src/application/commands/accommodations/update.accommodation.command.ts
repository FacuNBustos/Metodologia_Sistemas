import uuidValidate from "uuid-validate";
export class UpdateAccommodationCommand {
    private readonly id: string;
    private readonly name: string;
    private readonly pricePerNight: number;

    constructor (
        id:string,
        name: string,
        pricePerNight: number,
        
    ) {
        if (!uuidValidate(id)) {
            throw new Error("ID must be a valid UUID");
        }
        if (!(name)) {
            throw new Error("it must be a valid name");
        }

        if(!pricePerNight) {
            throw new Error("Must provide an price per night");
        }
        this.id=id;
        this.name=name;
        this.pricePerNight=pricePerNight;

    }
    getId(): string {
        return this.id;
    }

    getName() : string {
        return this.name;
      }
    
      getPricePerNight() : number {
        return this.pricePerNight;
      }

    
}