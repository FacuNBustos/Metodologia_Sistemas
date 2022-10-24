import Joi from "joi";

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
        const validObject = Joi.object({
            owner: Joi.string().min(3).max(50).alphanum().required(),
            passengers: Joi.array().required(),
            accommodation: Joi.string().min(3).max(50).required(),
            from: Joi.string().required(),
            to: Joi.string().required()
        })

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
