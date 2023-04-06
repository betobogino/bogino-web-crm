import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Task from './Task.js';

export const Project = sequelize.define('projects', {
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

Project.hasMany(Task,{ //hasMany = tiene muchos...
    foreignKey: 'projectId', //el campo que va a crear para hacer la relación en el modelo Task
    sourceKey: 'id' //el campo que va a usar para esa relación
});

Task.belongsTo(Project,{ //belongsTo = pertenecen a...
    foreignKey: 'projectId', //el campo que va a crear para hacer la relación en el modelo Task
    targetId: 'id' //el campo que va a usar para esa relación
});

// export default Project;