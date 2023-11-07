import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    dialect: 'mysql'
});

export default db;