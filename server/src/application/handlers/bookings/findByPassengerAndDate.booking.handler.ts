import toMemoryBookingRepository from '../../../infraestructure/repositories/toMemoryBooking.repository';
import { findByNameAndFromDateBookingCommand } from '../../commands/bookings/findByNameAndFromDate.booking.command';


export default new class findByPassengerAndDateBookingHandler {
  async execute(command: findByNameAndFromDateBookingCommand) {
    const booking = await toMemoryBookingRepository.findOneByNameAndFromDate(command);

    return booking;
  }
}