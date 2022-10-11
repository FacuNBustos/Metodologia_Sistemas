import { Application } from 'express';
import CommonRoutes from "./Common.routes";
import createBookingAction from '../actions/bookings/create.booking.action';


class BookingRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Booking');
    };

    setUpRoutes(): Application {
        this.app.post('/bookings', createBookingAction.run);

        return this.app;
    };
}
export default BookingRoutes;