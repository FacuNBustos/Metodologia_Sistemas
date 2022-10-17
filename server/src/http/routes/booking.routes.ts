import { Application } from 'express';
import updateBookingStatusAction from '../actions/booking/update.bookingStatus.action';
import CommonRoutes from "./Common.routes";
import createBookingAction from '../actions/bookings/create.booking.action';


class BookingRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Booking');
    };

    setUpRoutes(): Application {
        this.app.post('/bookings', createBookingAction.run);

        this.app.put('/booking/:status', updateBookingStatusAction.run);

        return this.app;
    };
}
export default BookingRoutes;