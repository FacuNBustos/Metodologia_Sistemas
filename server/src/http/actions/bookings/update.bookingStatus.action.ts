import { Request, Response } from "express";
import { UpdateBookingStatusCommand } from "../../../application/commands/bookings/update.bookingStatus.command";
import updateBookingStatusHandler from "../../../application/handlers/bookings/update.bookingStatus.handler";

class UpdateBookingStatusAction {
  async run(req: Request, res: Response) {

    try {
      const command = new UpdateBookingStatusCommand(
        req.body.status
      );

      try {
        
        await updateBookingStatusHandler.execute(command);

      } catch ( error:any ) {
        return res.status(404).json({message: error.message});
      }

      return res.status(200).json({message: "Booking Status updated"});
    } catch ( error:any ) {
      return res.status(400).json({message: error.message});
    }
  }
}

export default new UpdateBookingStatusAction();