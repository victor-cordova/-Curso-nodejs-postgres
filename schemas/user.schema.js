const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const username = Joi.string();
// const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  email: email.required(),
  name : name.required(),
  password: password.required(),
  username: username.required()
  // role: role.required()
});

const updateUserSchema = Joi.object({
  email: email,
  name: name,
  password: password,
  username,
  // role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema, updatePartialUserSchema }
