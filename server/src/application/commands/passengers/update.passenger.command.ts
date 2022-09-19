import uuidValidate from "uuid-validate";

export class UpdatePassengerCommand {
    private readonly id: string;
    private readonly fullName: string;
    private readonly email: string;
    private readonly identityCard: string;

    constructor (
        id: string,
        fullName: string,
        email: string,
        identityCard: string,
    ) {
        if (!uuidValidate(id)) {
            throw new Error("ID must be a valid UUID");
        }
        
        if (!fullName) {
            throw new Error("Must provide a full name");
        }
        
        if (!email) {
            throw new Error("Must provide an email");
        }

        if(!identityCard) {
            throw new Error("Must provide an identity card");
        }

        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.identityCard = identityCard;
    }

    getId() {
        return this.id;
    }

    getFullName() {
        return this.fullName;
    }

    getEmail() {
        return this.email;
    }

    getIdentityCard() {
        return this.identityCard;
    }
}
