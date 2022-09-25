import { Request, Response } from "express";
import { findByIdentityCardPassengerCommand } from "../../../application/commands/passengers/findByIdentityCard.passenger.command";
import findByIdentityCardPassengerHandler from "../../../application/handlers/passengers/findByIdentityCard.passenger.handler";


class FindByIdentityCardPassengerAction {
    async run(req: Request, res: Response){
       try {
        const command = new findByIdentityCardPassengerCommand(req.params.idcard);

        const passenger = await findByIdentityCardPassengerHandler.execute(command);

        return res.status(200).json(passenger);
       } catch( error:any ) {
        return res.status(400).json({ message: error.message });
       }
        
    }
}

export default new FindByIdentityCardPassengerAction();