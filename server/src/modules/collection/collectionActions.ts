import type { RequestHandler } from "express";
import Joi from "joi";
import collectionRepository from "./collectionRepository";

const Validatecollection: RequestHandler = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().required,
  });

  const result = schema.validate(req.body, { abortEarly: false });
  if (result.error) res.status(400).json(result.error);
  else next();
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const collections = await collectionRepository.selectAll();
    res.json(collections);
  } catch (error) {
    next(error);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const collection = await collectionRepository.selectOne(id);

    if (collection) {
      res.json(collection);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const collection = req.body;
    const result = await collectionRepository.updateById(id, collection);
    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCollection = req.body;
    const result = await collectionRepository.create(newCollection);
    if (result.affectedRows != null) {
      res.status(201).json(result);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const result = await collectionRepository.deleteById(id);
    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

export default { browse, read, edit, add, destroy, Validatecollection };
