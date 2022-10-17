import { Accommodation } from "../../domain/entities/accommodation.entity";
import accommodationRepository from "../repositories/accommodation.repository";


class Seeder {
    private accommodations: Array<Accommodation> = [];
    builder(){
        this.accommodations.push(new Accommodation('1','Matias',5500))
        this.accommodations.push(new Accommodation('2','Tomas', 9000))
        this.accommodations.push(new Accommodation('3','Francisco', 7890))
    }

    public async generate(): Promise<void> {
        for (const accommodations of this.accommodations){
            await accommodationRepository.save(accommodations);
        }
    }
  
}
export default Seeder