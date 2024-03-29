import passengerRepository from '../../../infraestructure/repositories/passenger.repository';
import { findByIdentityCardPassengerCommand } from '../../commands/passengers/findByIdentityCard.passenger.command';


export default new class findByIdentityCardPassengerHandler {
  async execute(command: findByIdentityCardPassengerCommand) {
    const passenger = await passengerRepository.findOneByIdentityCard(command);

    return passenger;
  }
}