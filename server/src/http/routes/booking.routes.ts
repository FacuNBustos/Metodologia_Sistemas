import { Application } from 'express';
import updateBookingStatusAction from '../actions/booking/update.bookingStatus.action';
import CommonRoutes from "./Common.routes";


class BookingRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Booking');
    };

    setUpRoutes(): Application {

        this.app.put('/booking/:status', updateBookingStatusAction.run);

        return this.app;
    };
}
export default BookingRoutes;