const Joi = require('joi');

const amount = Joi.number().integer();
const description = Joi.string();
const id = Joi.string().uuid();
const image = Joi.string().uri();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer();

const createProductSchema = Joi.object({
  amount: amount.required(),
  description: description.required(),
  image: image.required(),
  name: name.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  amount: amount,
  description: description,
  image: image,
  name: name,
  price: price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
