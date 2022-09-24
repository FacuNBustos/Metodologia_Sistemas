import {Request, Response} from "express";
import { Passenger } from "../../domain/entities/passenger.entity";
import passengerRepository from "../../infraestructure/repositories/passenger.repository";

class FindByIdentityCardPassengerAction {
    async run(req: Request, res: Response){
        const passenger: Passenger = await passengerRepository.findOneByIdentityCard();
       
        return res.status(200).json()
        
    }
}

export default new FindByIdentityCardPassengerAction();