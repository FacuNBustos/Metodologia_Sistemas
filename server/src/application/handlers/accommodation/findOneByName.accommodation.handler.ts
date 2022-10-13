import accommodationRepository from '../../../infraestructure/repositories/accommodation.repository';
import { findOneByNameAccommodationCommand } from '../../commands/accommodation/findOneByName.accommodation.command';


export default new class findOneByNameAccommodationHandler {
  async execute(command: findOneByNameAccommodationCommand) {
    const accommodation = await accommodationRepository.findOneByName(command);

    return accommodation;
  }
}