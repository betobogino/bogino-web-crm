import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Task from './Task.js';

const Project = sequelize.define('projects', {
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
    priority: {
        type: DataTypes.STRING
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdBy: {
        type: DataTypes.INTEGER
    }
});

Project.hasMany(Task,{
    foreignKey: 'projectId', //el campo que va a crear para hacer la relación en el modelo Task
    sourceKey: 'id' //el campo que va a usar para esa relación
});

Task.belongsTo(Project,{
    foreignKey: 'projectId', //
    targetId: 'id' //
});

export default Project;