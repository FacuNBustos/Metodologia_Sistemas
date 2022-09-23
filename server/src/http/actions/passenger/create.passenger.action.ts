import {Request, Response} from "express";
import CreatePassengerCommand from "../../../application/commands/passengers/create.passenger.command";

class CreatePassengerAction {
    async run(req: Request, res: Response) {

        try {
          const command = new CreatePassengerCommand(
            req.body.fullname,
            req.body.email,
            req.body.identitycard
          );
    
          try {
          } catch (error:any) {
            return res.status(404).json({message: error.message});
          }
    
          return res.status(200).json({message: "Passenger has been created"});
        } catch (e) {
          const {message} = e as Error;
          res.status(400).json({message});
        }
      }
}

export default new CreatePassengerAction();