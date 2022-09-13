// import passengerRepository from . . . ( repository );
// import { UpdatePassengerCommand } from . . . ( command );

export default new class UpdatePassengerHandler {

  // type command ->
  async execute(command: any) {

    const passenger = await passengerRepository.findOneByIdentityCard(command.getId());

    if (!passenger) {
      throw new Error('User not found');
    };

    passenger.changeFullName(command.fullName);
    passenger.changeEmail(command.email);
    passenger.changeIdentityCard(command.identityCard);

    await passengerRepository.save(passenger);
  }
  
}