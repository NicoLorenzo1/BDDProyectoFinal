import express, { Application } from 'express';
import db from '../db/config';
import cors from 'cors';
import authRoutes from '../routes/auth.routes';

class Server {

    private app: Application;
    private port: string | number;

    private authPath = {
        auth: '/api/auth'
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

    }

    routes() {
        this.app.use(this.authPath.auth, authRoutes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server; // Exporta la clase Server como predeterminada