import type { RequestHandler } from "express";
import movementRepository from "./movementRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const collections = await movementRepository.selectAll();
    res.json(collections);
  } catch (error) {
    next(error);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const parseId = Number.parseInt(req.params.id);
    const collection = await movementRepository.selectOne(parseId);

    if (collection != null) {
      res.json(collection);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const result = await movementRepository.create(req.body);

    if (result.affectedRows != null) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const parseId = Number.parseInt(req.params.id);
    const result = await movementRepository.deleteById(parseId);

    if (result.affectedRows > 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const parseId = Number.parseInt(req.params.id);
    const movement = req.body;
    const result = await movementRepository.updateById(parseId, movement);

    if (result.affectedRows > 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

export default { browse, read, add, destroy, edit };
