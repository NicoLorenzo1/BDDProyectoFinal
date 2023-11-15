import { DataTypes, Model } from "sequelize";
import db from "../db/config";

class User extends Model {
    declare password: string;
    declare logId: number;
}

User.init({
    logId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ci: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: 'User'
});


export default User;
