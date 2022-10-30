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
        const fromArray = from.trim().split("-").map((item) => {
            return Number(item)
        });
        const toArray = to.trim().split("-").map((item) => {
            return Number(item)
        });
        const nowYear = new Date(Date.now()).getFullYear()

        const validObject = Joi.object({
            owner: Joi.string().uuid().required(),
            passengers: Joi.array().items(Joi.valid(owner).required(), Joi.string().uuid()).required(),
            accommodation: Joi.string().uuid().required(),
            from: Joi.array().items(
                Joi.number().min(nowYear).required(),
                Joi.number().min(1).max(12).required(),
                Joi.number().min(1).max(31).required()
            ).max(3).required(),
            to: Joi.array().items(
                Joi.number().min(nowYear).required(),
                Joi.number().min(1).max(12).required(),
                Joi.number().min(1).max(31).required()
            ).max(3).required(),
        });

        const { error, value } = validObject.validate({
            owner: owner,
            passengers: passengers,
            accommodation: accommodation,
            from: fromArray,
            to: toArray
        });
        if (error) throw new Error(error.message);

        const fromDate = new Date(value.from[0],value.from[1],value.from[2]);
        const toDate = new Date(value.to[0],value.to[1],value.to[2]);

        const dateDifference = (toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24);
        if (dateDifference <= 0 ) {
            throw new Error("Invalid date range");
        };

        this.owner = value.owner;
        this.passengers = value.passengers;
        this.accommodation = value.accommodation;
        this.from = fromDate
        this.to = toDate;
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
