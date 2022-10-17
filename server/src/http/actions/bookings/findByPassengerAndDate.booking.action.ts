import { Request, Response } from "express";
import { findByNameAndFromDateBookingCommand } from "../../../application/commands/bookings/findByNameAndFromDate.booking.command";
import findByPassengerAndDateBookingHandler from "../../../application/handlers/bookings/findByPassengerAndDate.booking.handler";


class findByPassengerAndDateBookingAction {
    async run(req: Request, res: Response){
       try {
        const command = new findByNameAndFromDateBookingCommand(req.params.name, req.params.date);

        const booking = await findByPassengerAndDateBookingHandler.execute(command);

        return res.status(200).json(booking);
       } catch( error:any ) {
        return res.status(400).json({ message: error.message });
       }
        
    }
}

export default new findByPassengerAndDateBookingAction();