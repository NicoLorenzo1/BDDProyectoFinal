import { DataTypes, Model } from "sequelize";
import db from "../db/config";

class Periodo extends Model {
    declare año: Date;
    declare semestre: String;
    declare startDate: Date;
    declare finishDate: Date;

}

Periodo.init({
    year: {
        type: DataTypes.DATE,
        field: 'Año',
        primaryKey: true,
    },
    periodo: {
        type: DataTypes.STRING,
        field: 'Semestre'
    },
    startDate: {
        type: DataTypes.DATE,
        field: 'Fch_Inicio'
    },
    finishDate: {
        type: DataTypes.DATE,
        field: 'Fch_Fin'
    }
},
    {
        sequelize: db,
        tableName: 'Periodos_Actualización',
        timestamps: false,
        freezeTableName: true
    }

);

export default Periodo;

