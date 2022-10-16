import { Application } from 'express';
import CommonRoutes from "./Common.routes";
import createBookingAction from '../actions/bookings/create.booking.action';
import findByPassengerAndDateBookingAction from '../actions/bookings/findByPassengerAndDate.booking.action';


class BookingRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Booking');
    };

    setUpRoutes(): Application {
        this.app.post('/bookings', createBookingAction.run);
        this.app.get('/bookings/:passengers, from', findByPassengerAndDateBookingAction.run);
        return this.app;
    };
}
export default BookingRoutes;