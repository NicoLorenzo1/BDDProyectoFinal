import express, { Application } from 'express';
import db from '../db/config';

class Server {

    private app: Application;
    private port: string | number;

    constructor() {
        this.app = express();
        this.port = process.env.SERVER_PORT || 3307

        this.dbConnection();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.log(error);
        }
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server; // Exporta la clase Server como predeterminada