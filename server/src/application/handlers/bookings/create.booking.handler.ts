import { Booking } from "../../../domain/entities/booking.entity";
import toMemoryBookingRepository from "../../../infraestructure/repositories/toMemoryBooking.repository";
import { CreateBookingCommand } from "../../commands/bookings/create.booking.command";

class CreateBookingHandler {
    async execute(command: CreateBookingCommand) {
        const booking = Booking.create(
            command.getOwner(),
            command.getPassengers(),
            command.getAccommodation(),
            command.getFromDate(),
            command.getToDate()
        );

        await toMemoryBookingRepository.save(booking);
    }
}

export default new CreateBookingHandler();
