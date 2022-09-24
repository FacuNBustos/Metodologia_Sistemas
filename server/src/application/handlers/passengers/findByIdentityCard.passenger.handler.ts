import { Passenger } from '../../../domain/entities/passenger.entity';
import PassengerRepository from '../../../infraestructure/repositories/passenger.repository';
import { findByIdentityCardPassengerCommand } from '../../commands/passengers/findByIdentityCard.passenger.command';
import { Nullable } from '../../../domain/valueObjects/Nullable';

class findByIdentityCardPassengerHandler {
  async execute(command: findByIdentityCardPassengerCommand) {
    const passenger: Nullable<Passenger> = await PassengerRepository.findOneByIdentityCard(command.getIdentityCard());

    return passenger;
  }
}

export default findByIdentityCardPassengerHandler;