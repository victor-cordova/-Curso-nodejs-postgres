const boom = require('@hapi/boom');
const faker = require('faker');
var format = require('pg-format');

// const getConnection = require("../libs/postgres")
const pool = require("../libs/postgres.pool");

class UserService {
  constructor() {
    this.users = [];
    this.generate();
    this.pool = pool;
    this.pool.on("error", (err) => console.error(err)) //Cuando ocurra un error
    //con el pool, este será impreso.
  }

  async generate() {
    const limit = 10;
    // const arrayUser = []
    for (let index = 0; index < limit; index++) {
      this.users.push({
        // idData : faker.datatype.uuid(),
        idData : faker.name.lastName(),
        nameData : faker.name.lastName(),
        emailData : faker.internet.email(),
        genderData : faker.name.gender(),
        blockedData : faker.datatype.boolean()
      });
      // const query = format('INSERT INTO users (id, name, email, gender, blocked) VALUES %L', this.users); 

      // let query = `INSERT INTO users(id, name, email, gender, blocked)\
      // VALUES(${idData}, ${nameData}, ${emailData}, ${genderData}, ${blockedData});`;
      
    }
    console.log(Object.values(this.users[0]));
    // const query = await format('INSERT INTO users (id, name, email, gender, blocked) VALUES %L', Object.values(this.users[0])); 
    // await this.pool.query(query);
     //El pool funciona de manera
    // asíncrona, lo que la variable reponse tendrá el la respuesta del query.

    // return response.rows;
    // INSERT INTO table_name(id, name, email, gender, blocked)
    // VALUES (value1, value2, )
  }

  async find() {
    // const client = await getConnection();
    // const response = await client.query("SELECT * FROM public.tasks");
    const query = "SELECT * FROM users"
    // const response = await client.query(query);
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async updatePartial(id, changes) {
    return {
      id,
      changes,
    };
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    // this.products.push(newProduct);
    // const query = "SELECT * FROM users"
    const query = await format("INSERT INTO users (id, name, gender, email, blocked) VALUES %L", newProduct); 
    // await this.pool.query(query);
    // const response = await client.query(query);
    const newUser = await this.pool.query(query);
    return newUser.rows;
    
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
