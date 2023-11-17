import { DataTypes, Model } from "sequelize";
import db from "../db/config";
import sequelize from "sequelize/types/sequelize";

class Login extends Model {
    logId!: number;
    declare password: string;
}

Login.init(
    {
        logId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: db,
        timestamps: false
    },
);

export default Login;