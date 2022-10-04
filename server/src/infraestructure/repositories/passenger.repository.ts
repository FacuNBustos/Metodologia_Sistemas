import { findByIdPassengerCommand } from "../../application/commands/passengers/findById.passenger.command";
import { findByIdentityCardPassengerCommand } from "../../application/commands/passengers/findByIdentityCard.passenger.command";
import { Passenger } from "../../domain/entities/passenger.entity";

class PassengerRepository {
  
  private passengers: Passenger[];

  constructor() {
    this.passengers = [];
  };

  async findOneByIdentityCard(command: findByIdentityCardPassengerCommand): Promise<Passenger | null> {
    const passenger = this.passengers.find(function(p) {
      return p.getIdentityCard() === command.getIdentityCard();
    });

    return (passenger)? passenger : null;
  };

  async findOneById(command: findByIdPassengerCommand): Promise<Passenger | null> {
    const passenger = this.passengers.find(function(p) {
      return p.getId() === command.getId();
    });

    return (passenger) ? passenger : null;
  };

  async save(passenger: Passenger): Promise<void> {
    const savedPassenger = this.passengers.find(function(p) {
      return p.getId() === passenger.getId();
    });

    if (savedPassenger) {
      this.passengers.splice(this.passengers.indexOf(savedPassenger), 1);
    }

    this.passengers.push(passenger);
  }
}

export default new PassengerRepository();