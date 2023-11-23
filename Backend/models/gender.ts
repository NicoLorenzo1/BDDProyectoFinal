import { DataTypes, Model } from "sequelize";
import db from "../db/config";


class Gender extends Model {
    declare ci: number;
    declare date: Date;
}

Gender.init({
    ci: {
        type: DataTypes.STRING,
        field: 'Ci',
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        field: 'Fch_Agenda'
    }
}, {
    sequelize: db,
    tableName: 'Agenda',
    timestamps: false
});

export default Gender;