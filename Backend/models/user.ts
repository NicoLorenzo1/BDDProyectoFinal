import { DataTypes, Model } from "sequelize";
import db from "../db/config";

class User extends Model {
    declare password: string;
    declare logId: number;
    declare ci: number;

}

User.init({
    ci: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        field: 'Nombre'
    },
    surname: {
        type: DataTypes.STRING,
        field: 'Apellido'
    },
    birthdate: {
        type: DataTypes.DATE,
        field: 'Fch_Nacimiento'
    },
    adress: {
        type: DataTypes.STRING,
        field: 'Direccion'
    },
    contact: {
        type: DataTypes.INTEGER,
        field: 'Teléfono'
    },
    email: {
        type: DataTypes.STRING,
        field: 'Email'
    },
    logId: {
        type: DataTypes.INTEGER,
        field: 'LogId'
    }
}, {
    sequelize: db,
    modelName: 'User',
    tableName: 'Funcionarios',
    timestamps: false
});


export default User;
