import { DataTypes } from "sequelize";
import db from "../db/config";

const Form = db.define('Form', {
    ci: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.DATE
    },
    healthCard: {
        type: DataTypes.BOOLEAN
    },
    expirationDate: {
        type: DataTypes.DATE
    },
    proof: {
        type: DataTypes.BLOB
    },
    adress: {
        type: DataTypes.STRING
    },
    gmail: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.INTEGER
    }

});

export default Form;

