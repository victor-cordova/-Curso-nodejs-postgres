const { Client } = require("pg");

async function getConnection () {
    const client = new Client ({ //Para iniciar la conexión debe ser configurada
        // implementando POO
        host: "localhost",
        port: 5432,
        user: "victor",
        password: "admin123",
        database: "my_store"
    });
    await client.connect(); //Espera a que se cree el cliente para recien conectarlo
    return client;
}

module.exports = getConnection;