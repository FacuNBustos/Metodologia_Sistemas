import { Passenger } from "../../../domain/entities/passenger.entity";
import passengerRepository from "../../../infraestructure/repositories/passenger.repository";
import CreatePassengerCommand from "../../commands/passengers/create.passenger.command";

export default new class CreatePassengerHandler {
  async execute(command: CreatePassengerCommand) {
    const passenger = Passenger.create(
      command.getFullName(),
      command.getEmail(),
      command.getIdentityCard()
    );

    await passengerRepository.save(passenger);
  }
}