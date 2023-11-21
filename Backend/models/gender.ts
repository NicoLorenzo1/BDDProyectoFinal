import { DataTypes, Model } from "sequelize";
import db from "../db/config";


class Gender extends Model {
    declare ci: number;
    declare date: Date;
    declare number: number;
}

Gender.init({
    ci: {
        type: DataTypes.STRING,
        field: 'Ci',
        primaryKey: true,
    },
    date: {
        type: DataTypes.STRING,
        field: 'Fch_Agenda'
    },
    number: {
        type: DataTypes.INTEGER,
        field: 'Nro'
    }
}, {
    sequelize: db,
    tableName: 'Agenda',
    timestamps: false
});

export default Gender;