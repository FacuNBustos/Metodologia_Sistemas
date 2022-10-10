import { Request, Response } from "express";
import createAccommodationHandler from "../../../application/handlers/accommodation/create.accommodation.handler";
import createAccommodationCommand from "../../../application/commands/accommodation/create.accommodation.command";

class CreateAccommodationAction {
    async run(req: Request, res: Response) {
      try {
        try {
          const command = new createAccommodationCommand(
            req.body.name,
            req.body.pricePerNight,

          );
  
          await createAccommodationHandler.execute(command);
  
        } catch ( error:any ) {
          return res.status(404).json({ message: error.message });
        }
  
        return res.status(200).json({ message: "Accommodation has been created." });
      }catch( error:any ) {
        return res.status(400).json({ message: error.message });
      }
    }
  }
  
  export default new CreateAccommodationAction();