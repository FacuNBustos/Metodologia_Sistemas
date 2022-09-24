import { Request, Response } from "express";
import { findByIdentityCardPassengerCommand } from "../../../application/commands/passengers/findByIdentityCard.passenger.command";

class FindByIdentityCardPassengerAction {
    async run(req: Request, res: Response){
        
       try {
        const command = new findByIdentityCardPassengerCommand(req.params.idcard);

       } catch( error:any ) {
        return res.status(400).json({ message: error.message });
       }
       // falta

        
    }
}

export default new FindByIdentityCardPassengerAction();