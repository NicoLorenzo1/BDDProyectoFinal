import { DataTypes } from "sequelize";
import db from "../db/config";

const Agenda = db.define('Agenda', {
    number: {
        type: DataTypes.INTEGER,
    },
    ci: {
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.DATE
    }
});