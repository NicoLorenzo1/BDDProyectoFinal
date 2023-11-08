import { DataTypes } from "sequelize";
import db from "../db/config";

const Workers = db.define('Workers', {
    ci: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING,
    },
    birthdate: {
        type: DataTypes.DATE,
    },
    adress: {
        type: DataTypes.STRING,
    },
    contact: {
        type: DataTypes.INTEGER,
    },
    gmail: {
        type: DataTypes.STRING,
    },
    logId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
});