import { v4 } from 'uuid';

export class Passenger {

    private id: string;
    private fullName: string;
    private email: string;
    private identityCard: string;

    constructor(
        id: string,
        fullName: string,
        email: string,
        identityCard: string,
    ) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.identityCard = identityCard;
    }

    public static create(fullName: string, email: string, identityCard: string): Passenger {
        const id = v4();
        const passenger = new Passenger(id, fullName, email, identityCard);

        return passenger;
    }

    static fromPrimitives(primitives: any): Passenger {
        const passenger = new Passenger(
            primitives.id,
            primitives.fullName,
            primitives.email,
            primitives.identityCard
        );

        return passenger;
    }

    changeEmail(email: string): void {
        this.email = email;
    }

    changeFullName(fullName: string): void {
        this.fullName = fullName;
    }

    getId(): string {
        return this.id;
    }

    getFullName(): string {
        return this.fullName;
    }

    getEmail(): string {
        return this.email;
    }

    getIdentityCard(): string {
        return this.identityCard;
    }

    toPrimitives(): any {
        return {
            id: this.id,
            fullName: this.fullName,
            email: this.email,
            identityCard: this.identityCard,
        }
    }
}
