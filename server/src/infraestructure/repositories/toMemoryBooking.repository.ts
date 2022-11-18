import { findByIdBookingCommand } from "../../application/commands/bookings/findById.booking.command";
import { findByNameAndFromDateBookingCommand } from "../../application/commands/bookings/findByNameAndFromDate.booking.command";
import { Booking } from "../../domain/entities/booking.entity";

class toMemoryBookingRepository {

    private bookinges: Booking[];

    constructor() {
        this.bookinges = [];
    };

    async save(booking: Booking): Promise<void> {
        const savedBooking = this.bookinges.find(function(b) {
            return b.getId() === booking.getId();
          });
      
          if (savedBooking) {
            this.bookinges.splice(this.bookinges.indexOf(savedBooking), 1);
          }
      
          this.bookinges.push(booking);
    };

    async findOneById(command: findByIdBookingCommand): Promise<Booking | null> {
        const booking = this.bookinges.find(function(b) {
            return b.getId() === command.getId();
        });
      
        return (booking) ? booking : null;
    };

    async findOneByNameAndFromDate(command: findByNameAndFromDateBookingCommand): Promise<Booking | null> {
        const booking = this.bookinges.find(function(b) {
            const nameOwner = b.getOwner().getFullName();
            const fromBooking = b.getFrom();

            return (nameOwner.startsWith(command.getName()) && fromBooking.getTime() == command.getDate().getTime());
        });
        
        return (booking)? booking : null;
    };

}

export default new toMemoryBookingRepository;