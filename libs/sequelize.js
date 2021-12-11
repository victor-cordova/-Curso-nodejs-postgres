const { Sequelize } = require("sequelize");

const { config } = require("./../config/config");
const setupModels = require("../db/models");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
    dialect: "postgres", //Se indica que base de datos se usará.
    logging: true
}); //Dentro de seguelize se maneja pool, por ende,
//no hay necesidad de estar inicializando un pool.

setupModels(sequelize); //Se inicializa la creación del modelo con la conexión sequelize.

sequelize.sync(); //Este método lo que hace es unir los modelos creados en una estructura
//es necesario para crear los modelos con la estructura indicada.

module.exports = sequelize;