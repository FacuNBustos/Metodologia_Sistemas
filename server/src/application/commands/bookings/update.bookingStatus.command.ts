//import uuidValidate from "uuid-validate";

import Joi from "joi";

export class UpdateBookingStatusCommand {
    private readonly status: string;
    private readonly id: string;

    constructor (
        id: string,
        status: string
    ) {
        const validObject = Joi.object({
            id: Joi.string().uuid(),
            status : Joi.string().required(),
        })
        const error = validObject.validate({
            id: id,
            status : status,
        }).error;
        if (error) throw new Error(error.message);

        this.id = id;
        this.status = status;
    }

    getStatus() {
        return this.status;
    };

    getId(): string {
        return this.id;
    }
}