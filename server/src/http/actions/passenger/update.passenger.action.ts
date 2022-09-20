import {Request, Response} from "express";
import {UpdatePassengerCommand} from "../../../application/commands/passengers/update.passenger.command"

class UpdatePassengerAction {
  async run(req: Request, res: Response) {

    try {
      const command = new UpdatePassengerCommand(
        req.params.id,
        req.body.fullname,
        req.body.email,
        req.body.identitycard
      );

      try {
        await updatePassengerHandler.execute(command);
      } catch (error) {
        return res.status(404).json({message: error.message});
      }

      return res.status(200).json({message: "Passenger updated"});
    } catch (e) {
      const {message} = e as Error;
      res.status(400).json({message});
    }
  }
}

export default new UpdatePassengerAction();