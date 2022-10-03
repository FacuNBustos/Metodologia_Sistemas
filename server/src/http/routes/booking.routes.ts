import { Application } from 'express';
import CommonRoutes from "./Common.routes";


class BookingRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Booking');
    };

    setUpRoutes(): Application {

        return this.app;
    };
}
export default BookingRoutes;