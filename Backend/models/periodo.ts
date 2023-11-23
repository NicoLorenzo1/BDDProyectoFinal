import { DataTypes } from "sequelize";
import db from "../db/config";

const Periodo = db.define('Periodo', {
    año: {
        type: DataTypes.DATE,
    },
    semestre: {
        type: DataTypes.STRING
    },
    startDate: {
        type: DataTypes.DATE
    },
    finishDate: {
        type: DataTypes.DATE
    },

    //Se define la tabla a donde se deben insertar los datos en la bdd
    tableName: 'Periodos_Actualización'
});

export default Periodo;

