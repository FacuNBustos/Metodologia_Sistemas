import { Application } from 'express';
import CommonRoutes from "./Common.routes";
import statusServerAction from '../actions/server/status.server.action';

class ServerRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Server');
    };

    setUpRoutes(): Application {

        this.app.get("/ping", statusServerAction.run);
        
        return this.app;
    };
}
export default ServerRoutes;