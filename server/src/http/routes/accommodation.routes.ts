import { Application } from 'express';
import createAccommodationAction from '../actions/accommodation/create.accommodation.action';
import CommonRoutes from "./Common.routes";

class AccommodationRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Accommodation');
    };

    setUpRoutes(): Application {

        this.app.post('/accommodation', createAccommodationAction.run);

        return this.app;
    };
}

export default AccommodationRoutes;