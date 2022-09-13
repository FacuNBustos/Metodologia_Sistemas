// import Passenger from . . . ( entidad );
// import passengerRepository from . . . ( repositorio );
// import { FindOneByIdentityCarCommand } from . . . ( command );

export default new class FindOneByIdentityCar {

  // type command ->
  async execute(command: any): Promise<Passenger | null> {
    const passenger = await passengerRepository.findOneByIdentityCar(command.getId());

    return (passenger)? Passenger : null;
  }
}
