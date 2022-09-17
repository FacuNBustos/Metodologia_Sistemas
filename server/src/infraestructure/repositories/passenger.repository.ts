import { Passenger } from "../../domain/entities/passenger.entity";

class PassengerRepository {
  
  private passengers: Passenger[];

  constructor() {
    this.passengers = [];
  }

  async findOneByIdentityCard(identityCard: string): Promise<Passenger | null> {
    const passenger =this.passengers.find(p => p.getIdentityCard() === identityCard);

    //return (passenger) ? passenger : null;

    if (passenger)
      return passenger;
    else
      return null;
  }

  async save(passenger: Passenger): Promise<void> {
    const savedPassenger = this.passengers.find((p => p.getId() === passenger.getId()));

    if (savedPassenger) {
      this.passengers.splice(this.passengers.indexOf(savedPassenger), 1);
    }

    this.passengers.push(passenger);
  }
}

export default new PassengerRepository();