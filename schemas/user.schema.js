const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string();
const gender = Joi.string().min(4).max(6);
const email = Joi.string().email();
const blocked = Joi.boolean();
// const password = Joi.string().min(8);
// const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  name : Joi.required(),
  gender : Joi.required(),
  email : Joi.required(),
  blocked : Joi.required()
});

const updateUserSchema = Joi.object({
  name : Joi.required(),
  gender : Joi.required(),
  email : Joi.required(),
  blocked : Joi.required()
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
