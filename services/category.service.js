const boom = require('@hapi/boom');

const sequelize = require("../libs/sequelize");

class CategoryService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    const query = "SELECT * FROM users";
    // const [data] = await sequelize.query(query);
    const data = await sequelize.query(query);
    // return response.rows;
    return data;
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

module.exports = CategoryService;
