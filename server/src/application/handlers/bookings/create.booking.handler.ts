import { Booking } from "../../../domain/entities/booking.entity";
import { Passenger } from "../../../domain/entities/passenger.entity";
import accommodationRepository from "../../../infraestructure/repositories/accommodation.repository";
import passengerRepository from "../../../infraestructure/repositories/passenger.repository";
import toMemoryBookingRepository from "../../../infraestructure/repositories/toMemoryBooking.repository";
import { findOneByIdAccommodationCommand } from "../../commands/accommodations/findOneById.accommodation.command";
import { CreateBookingCommand } from "../../commands/bookings/create.booking.command";
import { findByIdPassengerCommand } from "../../commands/passengers/findById.passenger.command";

class CreateBookingHandler {
    async execute(command: CreateBookingCommand) {
        const commandFindOWner = new findByIdPassengerCommand(command.getOwner());
        const ownerSaved = await passengerRepository.findOneById(commandFindOWner);
        if (!ownerSaved) throw new Error("owner not exist");

        let passengers: Passenger[] =  [];
        command.getPassengers().forEach(async (passengerId) => {
            const command = new findByIdPassengerCommand(passengerId)
            const passengerSaved = await passengerRepository.findOneById(command);
            if (!passengerSaved) throw new Error("passenger not exist");
            passengers.push(passengerSaved);
        });

        const commandFindAccommodation = new findOneByIdAccommodationCommand(command.getAccommodation());
        const accommodationSaved = await accommodationRepository.findOneById(commandFindAccommodation);
        if (!accommodationSaved) throw new Error("accommodation not exist");

        const booking = Booking.create(
            ownerSaved,
            passengers,
            accommodationSaved,
            command.getFromDate(),
            command.getToDate()
        );

        await toMemoryBookingRepository.save(booking);
    }
}

export default new CreateBookingHandler();
