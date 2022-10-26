//import uuidValidate from "uuid-validate";

import Joi from "joi";

export class UpdateBookingStatusCommand {
    private readonly status: string;

    constructor (
        status: string,
    ) {
        const validObject = Joi.object({
            status : Joi.string().required(),
        })
        const error = validObject.validate({
            status : status,
        }).error;
        if (error) throw new Error(error.message);

        this.status = status;
    }

    getStatus() {
        return this.status;
    }
}