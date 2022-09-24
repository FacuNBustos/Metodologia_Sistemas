import { UpdatePassengerCommand } from '../../commands/passengers/update.passenger.command';
import { Passenger } from '../../../domain/entities/passenger.entity';
import passengerRepository from '../../../infraestructure/repositories/passenger.repository';

class UpdatePassengerHandler {
  async execute(command: UpdatePassengerCommand) {
    const passenger = Passenger.fromPrimitives({
      id: command.getId(),
      fullName: command.getFullName(),
      email: command.getEmail(),
      identityCard: command.getIdentityCard()
    });

    await passengerRepository.save(passenger);
  }
}

export default new UpdatePassengerHandler;