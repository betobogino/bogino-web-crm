import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    priority: {
        type: DataTypes.STRING
    },
    assignedTo: {
        type: DataTypes.INTEGER
    }
});

export default Task;