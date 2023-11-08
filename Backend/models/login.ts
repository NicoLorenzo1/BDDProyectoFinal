import { DataTypes } from "sequelize";
import db from "../db/config";

const Login = db.define('Login', {
    logId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    password: {
        type: DataTypes.STRING
    }
});