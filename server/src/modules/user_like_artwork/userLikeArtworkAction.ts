import { request } from "node:http";
import type { RequestHandler } from "express";
import userLikeArtworkRepository from "./userLikeArtworkRepository";
//import Joi from "joi";

//const ValidateUserLikeArtworkAction: RequestHandler = (req, res, next) => {
//const schema = Joi.object({
//user_id ,
//artwork_id
//});

//const result = schema.validate(req.body, { abortEarly: false });
//if (result.error) res.status(400).json(result.error);
//else next();
//};

const read: RequestHandler = async (req, res, next) => {
  try {
    const parseId = Number.parseInt(req.params.id);
    const like = await userLikeArtworkRepository.selectOne(parseId);

    if (like != null) {
      res.json(like);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const result = await userLikeArtworkRepository.create(req.body);

    if (result != null) {
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
    const parseId = Number.parseInt(req.params.id);
    const userId = req.body.user_id;
    const result = await userLikeArtworkRepository.deleteById(parseId, userId);

    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

export default { read, add, destroy };
