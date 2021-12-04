const { Pool } = require("pg");


const pool = new Pool ({  //Al momento de crear un nuevo cliente implementará
    // un await interno para compartir la conexión con las nuevas peticiones.
    host: "localhost",
    port: 5432,
    user: "victor",
    password: "admin123",
    database: "my_store"
});

module.exports = pool; // Se exporta el pool donde se reutilizará la 
//primera petición