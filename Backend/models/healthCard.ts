import { DataTypes } from "sequelize";
import db from "../db/config";

const healthCard = db.define('healthCard', {
    ci: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'Ci'
    },
    issueDate: {
        type: DataTypes.DATE,
        field: 'Fch_Emision'
    },
    expireDate: {
        type: DataTypes.DATE,
        field: 'Fch_Vencimiento'
    },
    proof: {
        type: DataTypes.STRING,
        field: 'Comprobante'
    }
}, {
    tableName: 'Carnet_Salud',
    timestamps: false
});

export default healthCard;