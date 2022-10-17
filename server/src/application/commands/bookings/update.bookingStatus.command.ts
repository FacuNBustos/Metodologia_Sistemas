//import uuidValidate from "uuid-validate";

export class UpdateBookingStatusCommand {
    private readonly status: string;

    constructor (
        status: string,
    ) {

        if(!status) {
            throw new Error("Must provide an status");
        }

        this.status = status;
    }

    getStatus() {
        return this.status;
    }
}