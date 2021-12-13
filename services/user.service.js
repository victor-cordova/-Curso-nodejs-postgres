const boom = require('@hapi/boom');
const faker = require('faker');
const { object } = require('joi');
var format = require('pg-format');

// const getConnection = require("./../libs/postgres")
const { models } = require("./../libs/sequelize"); //models es un nombre reservado creado 
//al momento de usar sequelize e inicializarlo en index.js con User.init. Esta variable 
//contendrá los modelos.


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

    
    // console.log(Object.values(this.users[0]));


    // const query = await format('INSERT INTO users (id, name, email, gender, blocked) VALUES %L', Object.values(this.users[0])); 
    // await this.pool.query(query);
     //El pool funciona de manera
    // asíncrona, lo que la variable reponse tendrá el la respuesta del query.

    // return response.rows;
    // INSERT INTO table_name(id, name, email, gender, blocked)
    // VALUES (value1, value2, )
  }

  async find() {
    const response = await models.User.findAll(); //Ese nombre User se creo en el archivo
    //user.model.js line 44 indicando el nombre del modelo.
    //La funcion de ese método es encontrar todo lo que se encuentra dentro del modelo Users

    // const client = await getConnection();
    // const response = await client.query("SELECT * FROM public.tasks");
    // const response = await client.query("SELECT * FROM users");
    // return response.rows;
    return response;
  }

  async findOne(id) {
    // "select * from products where name LIKE $1"
    const query = "SELECT * FROM users";
    // const response = await client.query(query);
    const response = await this.pool.query(query);
    // return { id };
    return response.rows;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async updatePartial(id, changes) {
    // UPDATE table_name
    // SET column1 = value1,
    //     column2 = value2,
    //     ...
    // WHERE condition;
    const changesSpread = Object.values(changes)
    // console.log(changes)
    // console.log(Object.values(changes))
    // const word = "name"
    // console.log(changesSpread)
    const query = {
      text: `UPDATE users SET name = $1, gender = $2 WHERE id = $3`,
      // text: `UPDATE users SET name = $1, gender = $2, email = $3, blocked = $4 WHERE id = $3`,
      values: [...changesSpread, id]
    }
    // console.log(query)
    // console.log(query)
    // const query = 'UPDATE users SET name = victor, email = victor@gmail.com WHERE id = fd824bb6-f8d5-4fc6-aec3-804ef3a4ec05'
    await this.pool.query(query);
    return {
      id,
      changes,
    };
  }

  async create(data) {
    const newProduct = [faker.datatype.uuid(), ...Object.values(data)]
    // const newProduct = {
    //   id: faker.datatype.uuid(),
    //   ...data
    // }
    // const newProductArray = Object.values(newProduct);
    
    const query = {
      text: 'INSERT INTO users (id, name, gender, email, blocked) VALUES($1, $2, $3, $4, $5)',
      values: newProduct
    }
    
    const queryShow = {
      id: newProduct[0],
      name: newProduct[1],
      gender: newProduct[2],
      email: newProduct[3],
    }
    // this.products.push(newProduct);
    // const query = "SELECT * FROM users"
    // const query = await format("INSERT INTO users (id, name, gender, email, blocked) VALUES %L", newProduct); 
    // await this.pool.query(query);
    // const response = await client.query(query);
    await this.pool.query(query);
    // return newUser.rows;
    return queryShow;
  }

  async delete(id) {
    // DELETE FROM table_name
    // WHERE condition;
    const query = {
      text: 'DELETE FROM users WHERE id = $1',
      values: [id]
    }
    // const query = 'DELETE FROM users WHERE condition';
    await this.pool.query(query);
    return { id };
  }
}

module.exports = UserService;
