import type { RequestHandler } from "express";
import Joi from "joi";
import type { AuthenticationRequest } from "../user/userActions";
import type { User } from "./../user/userRepository";
import commentRepository from "./commentRepository";

const ValidateComment: RequestHandler = (req, res, next) => {
  const schema = Joi.object({
    text: Joi.string().min(2).max(500).required(),
    //user_id: Joi.number().integer().required(),
    artwork_id: Joi.number().integer().required(),
  });
  const result = schema.validate(req.body, { abortEarly: false });
  if (result.error) {
    res.status(400).json(result.error.details);
    return;
  }
  next();
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const comments = await commentRepository.selectAll();
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const comment = await commentRepository.selectOne(id);

    if (comment) {
      res.json(comment);
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
    const artist = req.body;
    const result = await commentRepository.updateById(artist, id);
    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const add: RequestHandler = async (req: AuthenticationRequest, res, next) => {
  try {
    const user_id = (req.user as User).id as number;
    const { text, artwork_id } = req.body;
    const result = await commentRepository.create({
      text: text,
      artwork_id: artwork_id,
      user_id: user_id,
    });
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
    const result = await commentRepository.deleteById(id);
    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const ReadCommentByArtworkId: RequestHandler = async (req, res, next) => {
  try {
    const artworkId = Number.parseInt(req.params.id);
    const comments =
      await commentRepository.selectCommentByArtworkId(artworkId);
    if (comments.length > 0) {
      res.status(200).json(comments);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    next(error);
  }
};

export default {
  browse,
  read,
  edit,
  add,
  destroy,
  ValidateComment,
  ReadCommentByArtworkId,
};
