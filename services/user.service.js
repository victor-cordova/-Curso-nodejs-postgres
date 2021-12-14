const boom = require('@hapi/boom');
const faker = require('faker');

const { models } = require("./../libs/sequelize"); //models es un nombre reservado creado 
//al momento de usar sequelize e inicializarlo en index.js con User.init. Esta variable 
//contendrá los modelos.
const pool = require("./../libs/postgres.pool")

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  async generate() {
    // const limit = 10;
    // for (let index = 0; index < limit; index++) {
    //   this.users.push({
    //     idData : faker.datatype.uuid(),
    //     emailData : faker.internet.email(),
    //     nameData : faker.name.lastName(),
    //     passwordData : faker.internet.password(),
    //     usernameData : faker.internet.userName()
    //   });
    // }
  }

  async find() {
    const response = await models.User.findAll(); //Ese nombre User se creo en el archivo
    //user.model.js line 44 indicando el nombre del modelo.
    //La funcion de ese método es encontrar todo lo que se encuentra dentro del modelo Users
    
    if (response.length === 0) {
      throw boom.notFound("There's not users");
    }
    return response;
  }

  async findOne(id) {
    const user = await models.User.findOne({ where: { id: id } });
    
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await models.User.findOne({ where: { id: id } })

    if (!user) {
      throw boom.notFound('User not found');
    }

    await models.User.update({
      ...user,
      ...changes
    }, {
      where: { id: id }
    })

    return {
      id,
      changes,
    };
  }
  
  async updatePartial(id, changes) {
    const user = await models.User.findOne({ where: { id: id } })

    if (!user) {
      throw boom.notFound('User not found');
    }

    await models.User.update({
      ...user,
      ...changes
    }, {
      where: { id: id }
    })

    return {
      id,
      changes,
    };
  }

  async create(data) {
    console.log(data)
    const user = await models.User.create({
      id: faker.datatype.uuid(),
      ...data
    });

    return user;
  }

  async delete(id) {
    await models.User.destroy({ where: { id: id } });

    return { 
      text: `The user ${id} was deleted`
     };
  }
}

module.exports = UserService;
