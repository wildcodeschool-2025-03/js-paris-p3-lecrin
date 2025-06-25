import type { RequestHandler } from "express";
import userLikeArtworkRepository from "./userLikeArtworkRepository";

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

export default { read, add };
