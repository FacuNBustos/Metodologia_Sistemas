import { UpdateBookingStatusCommand } from '../../commands/bookings/update.bookingStatus.command';
import { Booking } from '../../../domain/entities/booking.entity';
import bookingRepository from '../../../infraestructure/repositories/toMemoryBooking.repository';

class UpdateBookingStatusHandler {
  async execute(command: UpdateBookingStatusCommand) {
    const booking = Booking.fromPrimitives({

      status: command.getStatus()
    });

    await bookingRepository.save(booking);
  }
}

export default new UpdateBookingStatusHandler;