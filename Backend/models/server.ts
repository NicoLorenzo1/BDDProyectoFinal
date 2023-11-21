import express, { Application } from 'express';
import db from '../db/config';
import cors from 'cors';
import routes from '../routes/general.routes';

class Server {

    private app: Application;
    private port: string | number;

    private Path = {
        general: '/api/general'
    }

    constructor() {
        this.app = express();
        this.port = process.env.SERVER_PORT || 3307
        this.middlewares();
        this.dbConnection();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.log(error);
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());

    }

    routes() {
        this.app.use(this.Path.general, routes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server; // Exporta la clase Server como predeterminada