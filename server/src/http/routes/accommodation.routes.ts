import { Application } from 'express';
import createAccommodationAction from '../actions/accommodations/create.accommodation.action';
import CommonRoutes from "./Common.routes";
import findOneByNameAccommodationAction from '../actions/accommodations/findOneByName.accommodation.action';

class AccommodationRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Accommodation');
    };

    setUpRoutes(): Application {

        this.app.post('/accommodation', createAccommodationAction.run);

        this.app.get('/accommodation/:name', findOneByNameAccommodationAction.run);

        return this.app;
    };
}

export default AccommodationRoutes;