
export class CreateBookingCommand {
    private readonly owner: string;
    private readonly passengers: string[];
    private readonly accommodation: string;
    private readonly from: Date;
    private readonly to: Date;

    constructor(
        owner: string,
        passengers: string[],
        accommodation: string,
        from: string,
        to: string
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

        const dateDifference = (new Date(to).getTime() - new Date(from).getTime()) / (1000 * 3600 * 24);
        if (dateDifference >= 1) {
            throw new Error("Invalid date range");
        };

        this.owner = owner;
        this.passengers = passengers;
        this.accommodation = accommodation;
        this.from = new Date(from);
        this.to = new Date(to);
    }

    getOwner(): string {
        return this.owner;
    }

    getPassengers(): string[] {
        return this.passengers;
    }

    getAccommodation(): string {
        return this.accommodation;
    }

    getFromDate(): Date {
        return this.from;
    }

    getToDate(): Date {
        return this.to;
    }
}
