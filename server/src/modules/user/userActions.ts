import type { RequestHandler } from "express";
import Joi, { required } from "joi";
import userRepository from "./userRepository";

const ValidateUser: RequestHandler = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(1).max(255).required(),
    birthday: Joi.date().required(),
    mail: Joi.string().email().required(),
    password: Joi.string().alphanum().min(1).max(255).required(),
    admin: Joi.string().alphanum().min(1).max(255).required(),
  });

  const result = schema.validate(req.body, { abortEarly: false });
  if (result.error) res.status(400).json(result.error);
  else next();
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const users = await userRepository.selectAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const user = await userRepository.selectOne(id);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    // Create the user
    const result = await userRepository.create(req.body);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted user

    if (result.affectedRows != null) {
      res.status(201).json(result);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const deleteId = Number.parseInt(req.params.id);
    const deleteUser = await userRepository.deleteById(deleteId);
    if (deleteUser.affectedRows) {
      res.sendStatus(204);
    } else {
      res.status(404);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const user = req.body;
    const result = await userRepository.updateById(user, id);
    if (result) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add, read, destroy, edit, ValidateUser };
