import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    nickname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: { 
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    }
});

export default User;