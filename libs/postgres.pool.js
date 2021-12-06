const { Pool } = require("pg");

const config = require("../config/config"); //Por medio de estas variables de 
//entorno se evita colocar la data del cliente como se muestra abajo.

const USER = encodeURIComponent(); //Se va a proteger el 
//usuario antes de enviarlo como URI

const pool = new Pool ({  //Al momento de crear un nuevo cliente implementará
    // un await interno para compartir la conexión con las nuevas peticiones.
    host: "localhost",
    port: 5432,
    user: "victor",
    password: "admin123",
    database: "my_store"
});

module.exports = pool;