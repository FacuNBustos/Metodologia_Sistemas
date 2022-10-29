import { Accommodation } from "../../domain/entities/accommodation.entity";
import accommodationRepository from "../repositories/accommodation.repository";


class Seeder {
    private accommodations: Array<Accommodation> = [];
    builder(){
        this.accommodations.push(new Accommodation('b530e645-e97d-4368-9e3f-167ab25f99ee','Hotel Menem',5500));
        this.accommodations.push(new Accommodation('52e3e369-d4a1-4fc3-b5b7-873d2254ea1a','Hotel Sarmiento', 9000));
        this.accommodations.push(new Accommodation('b5564183-be7a-42fb-aca5-7d22351fa57c','Hotel Tu Vieja', 7890));
    }

    public async generate(): Promise<void> {
        for (const accommodation of this.accommodations){
            await accommodationRepository.save(accommodation);
        }
    }
  
}
export default Seeder