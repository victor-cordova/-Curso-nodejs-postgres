const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const username = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  name : name.required(),
  password: password.required(),
  username: username.required()
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  password: password.required(),
  username: username.required()
});

const updatePartialUserSchema = Joi.object({
  email: email,
  name: name,
  password: password,
  username: username
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema, updatePartialUserSchema }