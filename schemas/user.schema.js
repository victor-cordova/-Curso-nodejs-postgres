const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string();
const gender = Joi.string();
const email = Joi.string().email();
const blocked = Joi.boolean();
// const password = Joi.string().min(8);
// const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  name : name.required(),
  gender : gender.required(),
  email : email.required(),
  blocked : blocked.required()
});

const updateUserSchema = Joi.object({
  name : name.required(),
  gender : gender.required(),
  email : email.required(),
  blocked : blocked.required()
});

const updatePartialUserSchema = Joi.object({
  name : name,
  gender : gender,
  email : email,
  blocked : blocked
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema, updatePartialUserSchema }
