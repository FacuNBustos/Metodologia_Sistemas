import passengerRepository from '../../../infraestructure/repositories/passenger.repository';
import { findByIdentityCardPassengerCommand } from '../../commands/passengers/findByIdentityCard.passenger.command';


export default new class findByIdentityCardPassengerHandler {
  async execute(command: findByIdentityCardPassengerCommand) {
    const passenger = await passengerRepository.findOneByIdentityCard(command);

    if (!passenger) {
      throw new Error('Passenger not found');
    }

    return passenger;
  }
}
