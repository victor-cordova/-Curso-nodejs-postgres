require("dotenv").config();

const config = {
    env: process.env.NODE_ENV || "dev", //Indica en que entorno se está 
    // desarrollo o produccion
    port: process.env.PORT || 3000, //Se indica en que puerto está corriendo el proyecto.
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
}

module.exports = { config };