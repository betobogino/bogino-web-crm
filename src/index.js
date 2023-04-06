import app from './app.js';
import dotenv from 'dotenv';
import sequelize from './database/database.js';

import './models/Project.js';

dotenv.config(); 

//Creo una funcion async para poder usar codigo asincrono para sequelize.authenticate();
const main = async () => {
    try {
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');
        await sequelize.sync({force:true});
        
        app.listen(process.env.PORT);
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();