import { Request, Response } from "express";
import CreatePassengerCommand from "../../../application/commands/passengers/create.passenger.command";
import createPassengerHandler from "../../../application/handlers/passengers/create.passenger.handler";

class CreatePassengerAction {
  async run(req: Request, res: Response) {
    try {
      try {
        const command = new CreatePassengerCommand(
          req.body.fullName,
          req.body.email,
          req.body.identityCard
        );

        await createPassengerHandler.execute(command);

      } catch ( error:any ) {
        return res.status(404).json({ message: error.message });
      }

      return res.status(200).json({ message: "Passenger has been created." });
    }catch( error:any ) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new CreatePassengerAction();