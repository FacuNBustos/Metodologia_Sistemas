import findByIdentityCardPassengerAction from "../actions/findByIdentityCard.passenger.action";
import CommonRoutes from "./Common.routes";
import { Application } from "express";


class PassengerRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Passengers');
    }

    setUpRoutes(): Application {
        this.app.get('/passengers', findByIdentityCardPassengerAction.run);
        return this.app;
    }
}
export default PassengerRoutes;