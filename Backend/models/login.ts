import { DataTypes, Model } from "sequelize";
import db from "../db/config";
import sequelize from "sequelize/types/sequelize";

class Login extends Model {

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
        // Otras columnas...
    },
    {
        sequelize: db,
        timestamps: false
    },
);

export default Login;