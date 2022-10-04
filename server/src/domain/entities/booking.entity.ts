import { v4 } from "uuid";
import { BOOKING_STATES } from "../enum/Enum.state";
import { Passenger } from "./passenger.entity";

export class Booking {
    private id: string;
    private owner: Passenger;
    private passengers: Passenger[];
    private accommodation: null;
    private from: Date;
    private to: Date;
    private status: string;

    constructor(
        id: string,
        owner: Passenger,
        passengers: Passenger[],
        accommodation: null,
        from: Date,
        to: Date,
        status: string
    ) {
        this.id = id;
        this.owner = owner;
        this.passengers = passengers;
        this.accommodation = accommodation;
        this.from = from;
        this.to = to;
        this.status = status;
    };

    public static create(owner: Passenger, passengers: Passenger[], accommodation: null, from: Date, to: Date) {

        if (!passengers.includes(owner)) {
            throw new Error("the owner is not included in the passengers");
        };

        const differenceDate = ( to.getTime() - from.getTime() ) / ( 1000 * 3600 * 24 );
        if ( differenceDate >= 1 ) {
            throw new Error("invalid dates range");
        };
        
        const id = v4();
        const status = BOOKING_STATES.PENDING;

        const booking = new Booking(id, owner, passengers, accommodation, from, to, status);

        return booking;
    };

    static fromPrimitives(primitives: any) {
        const booking = new Booking(
            primitives.id,
            primitives.owner,
            primitives.passenger,
            primitives.accommodation,
            primitives.from,
            primitives.to,
            primitives.status
        );

        return booking;
    };

    changeStatus(status: string) {
        
        if (status !== BOOKING_STATES.ACCEPTED && status !== BOOKING_STATES.PENDING && status !== BOOKING_STATES.REJECTED) {
            throw new Error("invalid status object");
        };

        if (status === this.status) {
            throw new Error("is already the assigned state");
        };

        if (this.status === BOOKING_STATES.REJECTED) {
            throw new Error("the booking is in rejected status");
        };

        if (status === BOOKING_STATES.PENDING && this.status === BOOKING_STATES.ACCEPTED) {
            throw new Error("invalid state change");
        };

        this.status = status;
    };

    getId(): string {
        return this.id;
    };

    getOwner(): Passenger {
        return this.owner;
    };

    getPassengers(): Passenger[] {
        return this.passengers;
    };

    getAccommodation(): null {
        return this.accommodation;
    };

    getFrom(): Date {
        return this.from;
    };

    getTo(): Date {
        return this.to;
    };

    getStatus(): string {
        return this.status;
    };

    getFinalPrice(): string {
        const differenceDays: number = this.from.getTime() - this.to.getTime();
        const finalPrice: number = differenceDays * this.accommodation.getPricePerNight();

        // missing accommodation entity

        return finalPrice.toString();
    };

    toPrimitives(): any {
        return {
            id: this.id,
            owner: this.owner,
            passengers: this.passengers,
            from: this.from,
            to: this.to,
            status: this.status
        }
    }
}