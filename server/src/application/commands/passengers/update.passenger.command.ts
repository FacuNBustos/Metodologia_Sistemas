import Joi from "joi";
import validate from "uuid-validate";
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
        const validObject = Joi.object({
            id: Joi.string().uuid().required(),
            fullName: Joi.string().min(3).max(50).required(),
            email: Joi.string().email().required(),
            identityCard: Joi.string().max(15).required()
        })
        
        const error = validObject.validate({
            id: id,
            fullName: fullName,
            email: email,
            identityCard: identityCard
        }).error;
        if (error) throw new Error(error.message);

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
