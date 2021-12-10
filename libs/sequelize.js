const { Sequelize } = require("sequelize");

const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
    dialect: "postgres", //Se indica que base de datos se usará.
    logging: true
}); //Dentro de seguelize se maneja pool, por ende,
//no hay necesidad de estar inicializando un pool.

module.exports = sequelize;