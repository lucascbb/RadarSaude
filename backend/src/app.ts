import express, { Express } from 'express';
import cors from 'cors';
import compression from 'compression';
import routes from '../src/app/routes/routes';
require("./sequelize");

class App {
    server: Express;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(): void {
        this.server.use(cors());
        this.server.use(compression());
        this.server.use(express.json({ limit: '10mb' }));
    }

    routes(): void {
        this.server.use(routes);
    }
}

export default new App().server;
