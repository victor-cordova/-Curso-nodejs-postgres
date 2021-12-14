const express = require('express');

const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema, updatePartialUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      response = await service.delete(id);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updatePartialUserSchema, 'body'),
  async (req, res, next) => {
    try { 
      const { id } = req.params;
      const body = req.body;
      const user = await service.updatePartial(id, body);
      
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      
      console.log(Object.values(data))
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

