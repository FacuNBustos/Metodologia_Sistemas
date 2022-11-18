import { Accommodation } from "../../domain/entities/accommodation.entity";
import { findOneByIdAccommodationCommand } from "../../application/commands/accommodations/findOneById.accommodation.command";
import { findOneByNameAccommodationCommand } from "../../application/commands/accommodations/findOneByName.accommodation.command";

class AccommodationRepository {
  
  private accommodations: Accommodation[];

  constructor() {
    this.accommodations = [];
  };

  async save(accommodation: Accommodation): Promise<void> {
    const savedAccommodation = this.accommodations.find(function(a) {
      return a.getId() === accommodation.getId();
    });

    if (savedAccommodation) {
      this.accommodations.splice(this.accommodations.indexOf(savedAccommodation), 1);
    }

    this.accommodations.push(accommodation);
  }

  async findOneById(command: findOneByIdAccommodationCommand): Promise<Accommodation | null> {
    const accommodation = this.accommodations.find(function(a) {
      return a.getId() === command.getId();
    });

    return (accommodation) ? accommodation : null;
  };
  
  async findOneByName(command: findOneByNameAccommodationCommand): Promise<Accommodation | null> {
    const accommodation = this.accommodations.find(function(a) {
      return a.getName().includes(command.getName());
    });
    
    return (accommodation) ? accommodation : null;
  };
  
}

export default new AccommodationRepository();
