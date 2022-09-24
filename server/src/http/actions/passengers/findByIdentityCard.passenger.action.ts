import { Request, Response } from "express";
import { findByIdentityCardPassengerCommand } from "../../../application/commands/passengers/findByIdentityCard.passenger.command";
import findOneByIdentityCardPassengerHandler from "../../../application/handlers/findOneByIdentityCard.passenger.handler";
import { Passenger } from "../../../domain/entities/passenger.entity";
import { Nullable } from "../../../domain/valueObjects/Nullable";


class FindByIdentityCardPassengerAction {
    async run(req: Request, res: Response){
       try {
        const command = new findByIdentityCardPassengerCommand(req.params.idcard);

        const passenger: Nullable<Passenger> = await findOneByIdentityCardPassengerHandler.execute(command);

        return res.status(200).json(passenger);
       } catch( error:any ) {
        return res.status(400).json({ message: error.message });
       }
        
    }
}

export default new FindByIdentityCardPassengerAction();