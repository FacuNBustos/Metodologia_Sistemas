import { Passenger } from "../../../domain/entities/passenger.entity";
import { Accommodation } from "../../../domain/entities/accommodation.entity";

export class CreateBookingCommand {
    private readonly owner: Passenger;
    private readonly passengers: Passenger[];
    private readonly accommodation: Accommodation;
    private readonly from: Date;
    private readonly to: Date;

    constructor(
        owner: Passenger,
        passengers: Passenger[],
        accommodation: Accommodation,
        from: Date,
        to: Date
    ) {
        if (!owner) {
            throw new Error("Must provide an owner");
        }

        if (!passengers) {
            throw new Error("Must provide passengers");
        }

        if (!accommodation) {
            throw new Error("Must provide an accommodation");
        }

        if (!from) {
            throw new Error("Must provide a 'from' date");
        }

        if (!to) {
            throw new Error("Must provide a 'to' date");
        }

        if (!passengers.includes(owner)) {
            throw new Error("Owner must be included among the passengers");
        }

        const dateDifference = (to.getTime() - from.getTime()) / (1000 * 3600 * 24);
        if (dateDifference >= 1) {
            throw new Error("Invalid date range");
        };

        this.owner = owner;
        this.passengers = passengers;
        this.accommodation = accommodation;
        this.from = from;
        this.to = to;
    }

    getOwner(): Passenger {
        return this.owner;
    }

    getPassengers(): Passenger[] {
        return this.passengers;
    }

    getAccommodation(): Accommodation {
        return this.accommodation;
    }

    getFromDate(): Date {
        return this.from;
    }

    getToDate(): Date {
        return this.to;
    }
}
