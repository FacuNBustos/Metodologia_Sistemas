// import { Passenger } from . . . ( entity );
// import passengerRepository from . . . ( repository );
// import { CreatePassengerCommand } from . . . ( command );

export default new class CreatePassengerHandler {

  // type command ->
  async execute(command: any) {

    const passenger = Passenger.create(
      command.getEmail(),
      command.getFullName(),
      command.getEmail(),
      command.getIdentityCard()
    );

    await passengerRepository.save(passenger);
  }
}