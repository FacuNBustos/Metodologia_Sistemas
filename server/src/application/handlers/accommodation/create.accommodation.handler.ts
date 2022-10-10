import { Accommodation } from "../../../domain/entities/accommodation.entity";
import accommodationRepository from "../../../infraestructure/repositories/accommodation.repository";
import CreateAccommodationCommand from "../../commands/accommodation/create.accommodation.command";

export default new class CreateAccommodationHandler {
  async execute(command: CreateAccommodationCommand) {
    const accommodation = Accommodation.create(
      command.getname(),
      command.getpricePerNight(),

    );

    await accommodationRepository.save(accommodation);
  }
}