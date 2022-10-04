import { Application } from 'express';
import CommonRoutes from "./Common.routes";
import findByIdentityCardPassengerAction from "../actions/passengers/findByIdentityCard.passenger.action";
import createPassengerAction from '../actions/passengers/create.passenger.action';
import updatePassengerAction from '../actions/passengers/update.passenger.action';


class PassengerRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Passenger');
    };

    setUpRoutes(): Application {

        this.app.get('/passengers/:idcard', findByIdentityCardPassengerAction.run);

        this.app.get('/passengers>/:id', () => {});

        this.app.post('/passengers', createPassengerAction.run);

        this.app.put('/passengers/:id', updatePassengerAction.run);

        return this.app;
    };
}
export default PassengerRoutes;