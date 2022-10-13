import { Request, Response } from "express";
import { CreateBookingCommand } from "../../../application/commands/bookings/create.booking.command";
import createBookingHandler from "../../../application/handlers/bookings/create.booking.handler";

class CreateBookingAction {
    async run(req: Request, res: Response) {
        const {owner, passengers, accommodation, from, to } = req.body;

        try {
            const command = new CreateBookingCommand(
                owner,
                passengers,
                accommodation,
                from,
                to
            );

            await createBookingHandler.execute(command);

            return res.status(201).json({ message: "Booking has been created." });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export default new CreateBookingAction();
