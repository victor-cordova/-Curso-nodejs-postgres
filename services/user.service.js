const boom = require('@hapi/boom');

// const getConnection = require("./../libs/postgres")
const { models } = require("./../libs/sequelize"); //models es un nombre reservado creado 
//al momento de usar sequelize e inicializarlo en index.js con User.init. Esta variable 
//contendrá los modelos.


class UserService {
  constructor() {}

  async create(data) {
    return data;
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
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
