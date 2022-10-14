import { Request, Response } from "express";
import { findOneByNameAccommodationCommand } from "../../../application/commands/accommodations/findOneByName.accommodation.command";
import findOneByNameAccommodationHandler from "../../../application/handlers/accommodations/findOneByName.accommodation.handler";

class findOneByNameAccommodationAction {
    async run(req: Request, res: Response){
       try {
        const command = new findOneByNameAccommodationCommand(req.params.name);

        const accommodation = await findOneByNameAccommodationHandler.execute(command);

        return res.status(200).json(accommodation);
       } catch( error:any ) {
        return res.status(400).json({ message: error.message });
       }
        
    }
}

export default new findOneByNameAccommodationAction();