import { Accommodation } from "../../../domain/entities/accommodation.entity";
import { UpdateAccommodationCommand} from "../../commands/accommodations/update.accommodation.command";
import accommodationRepository from "../../../infraestructure/repositories/accommodation.repository";


class UpdateAccommodationHandler {
    async execute(command: UpdateAccommodationCommand) {
      const accommodation = Accommodation.fromPrimitives({
        id: command.getId(),
        name: command.getName(),
        pricePerNight: command.getPricePerNight(),
      });
  
      await accommodationRepository.save(accommodation);
    }
  }
  
  export default new UpdateAccommodationHandler;