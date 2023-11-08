import { DataTypes } from "sequelize";
import db from "../db/config";

const healthCard = db.define('healthCard', {
    ci: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    issueDate: {
        type: DataTypes.DATE
    },
    expireDate: {
        type: DataTypes.DATE
    },
    proof: {
        type: DataTypes.BLOB
    }
});