import { Application } from 'express';
import updateBookingStatusAction from '../actions/bookings/update.bookingStatus.action';
import CommonRoutes from "./Common.routes";
import createBookingAction from '../actions/bookings/create.booking.action';
import findByPassengerAndDateBookingAction from '../actions/bookings/findByPassengerAndDate.booking.action';


class BookingRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Booking');
    };

    setUpRoutes(): Application {
        this.app.post('/bookings', createBookingAction.run);

        this.app.get('/bookings', findByPassengerAndDateBookingAction.run);

        this.app.put('/bookings/:id', updateBookingStatusAction.run);

        return this.app;
    };
}
export default BookingRoutes;