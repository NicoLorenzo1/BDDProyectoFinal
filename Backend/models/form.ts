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
        type: DataTypes.STRING
    },
    adress: {
        type: DataTypes.STRING
    },
    gmail: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.INTEGER
    },
    //Se define la tabla a donde se deben insertar los datos en la bdd
    tableName: 'formulario'
});

export default Form;

