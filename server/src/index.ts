import express from "express";
import cors from 'cors';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import AccommodationRoutes from "./http/routes/accommodation.routes";
import PassengerRoutes from "./http/routes/passenger.routes";
import BookingRoutes from "./http/routes/booking.routes";
import Seeder from "./infraestructure/seeder/accommodation.seeder";
import CommonRoutes from "./http/routes/Common.routes";
import Seeder from "./infraestructure/seeder/accommodation.seeder";


const app: express.Application = express();

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false;
};

new Seeder().generate();

app.use(expressWinston.logger(loggerOptions));

const routes: Array<CommonRoutes> = [];

app.use(cors());
app.use(express.json());

routes.push(new PassengerRoutes(app));
routes.push(new AccommodationRoutes(app));
routes.push(new BookingRoutes(app));

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});