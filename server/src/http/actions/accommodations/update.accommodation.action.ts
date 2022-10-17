import { Request, Response } from "express";
import updateAccommodationHandler from "../../../application/handlers/accommodations/update.accommodation.handler";
import { UpdateAccommodationCommand } from "../../../application/commands/accommodations/update.accommodation.command";


class UpdateAccommodationAction {
    async run(req: Request, res: Response) {
  
      try {
        const command = new UpdateAccommodationCommand(
          req.params.name,
          req.body.pricePerNight,
        );
  
        try {
          
          await updateAccommodationHandler.execute(command);
  
        } catch ( error:any ) {
          return res.status(404).json({message: error.message});
        }
  
        return res.status(200).json({message: "Accommodation has been updated"});
      } catch ( error:any ) {
        return res.status(400).json({message: error.message});
      }
    }
  }
  
  export default new UpdateAccommodationAction();