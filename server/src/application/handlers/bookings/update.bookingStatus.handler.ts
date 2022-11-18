import { UpdateBookingStatusCommand } from '../../commands/bookings/update.bookingStatus.command';
import { Booking } from '../../../domain/entities/booking.entity';
import bookingRepository from '../../../infraestructure/repositories/toMemoryBooking.repository';
import { findByIdBookingCommand } from '../../commands/bookings/findById.booking.command';

class UpdateBookingStatusHandler {
  async execute(command: UpdateBookingStatusCommand) {
    const commandFindById = new findByIdBookingCommand(command.getId());

    const bookingSaved = await bookingRepository.findOneById(commandFindById);

    if(!bookingSaved) {
      throw new Error("booking not exist")
    };
    bookingSaved.changeStatus(command.getStatus());

    await bookingRepository.save(bookingSaved);
  }
}

export default new UpdateBookingStatusHandler;