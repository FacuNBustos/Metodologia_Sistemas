import express from "express";
import cors from 'cors';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import PassengerRoutes from "./http/routes/passenger.routes";
import ServerRoutes from "./http/routes/server.routes";

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
}

app.use(expressWinston.logger(loggerOptions));

const routes: Array<any> = [];

app.use(cors());
app.use(express.json());

routes.push(new PassengerRoutes(app));
routes.push(new ServerRoutes(app));


app.listen(3000, () => {
  routes.forEach((route: any) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});