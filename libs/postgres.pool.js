const { Pool } = require("pg");

const { config } = require("./../config/config"); //Por medio de estas variables de 
//entorno se evita colocar la data del cliente como se muestra abajo.

const USER = encodeURIComponent(config.dbUser); //Se va a proteger el 
//usuario antes de enviarlo como URI
const PASSWORD = encodeURIComponent(config.dbPassword);//Se están encodeando los componentes
//que serán enviados como URI en la configuración para el pool.
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
//Este es el URI que se usará con sus respectivas configuraciones implementando las variables
//de entorno

const pool = new Pool({ connectionString: URI });

// const pool = new Pool ({  //Al momento de crear un nuevo cliente implementará
//     // un await interno para compartir la conexión con las nuevas peticiones.
//     host: "localhost",
//     port: 5432,
//     user: "victor",
//     password: "admin123",
//     database: "my_store"
// });

module.exports = pool; // Se exporta el pool donde se reutilizará la 
//primera petición