import { Application } from 'express';
import CommonRoutes from "./Common.routes";


class AccommodationRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Passenger');
    };

    setUpRoutes(): Application {


        return this.app;
    };
}

export default AccommodationRoutes;