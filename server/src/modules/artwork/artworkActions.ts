import { type RequestHandler, json } from "express";
import Joi from "joi";
import movementRepository from "../mouvement/movementRepository";
import artworkRepository from "./artworkRepository";

const ValidateArtwork: RequestHandler = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(1).max(255).required(),
    description: Joi.string().alphanum().required(),
    place: Joi.string().min(2).max(100).required(),
    //photo:
    date_artwork: Joi.date().max("now").required(),
    dimensions: Joi.string().alphanum().required(),
  });

  const result = schema.validate(req.body, { abortEarly: false });
  if (result.error) res.status(400).json(result.error);
  else next();
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const artworks = await artworkRepository.selectAll();
    res.json(artworks);
  } catch (error) {
    next(error);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const parseId = Number.parseInt(req.params.id);
    const artwork = await artworkRepository.selectOne(parseId);
    artwork.movements = await movementRepository.selectAllByArtwork(parseId);

    if (artwork != null) {
      res.json(artwork);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const result = await artworkRepository.create(req.body);

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
    const parseId = Number.parseInt(req.params.id);
    const result = await artworkRepository.deleteById(parseId);

    if (result.affectedRows > 0) {
      res.sendStatus(204);
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
    const artwork = req.body;
    const result = await artworkRepository.updateById(parseId, artwork);

    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

export default { browse, read, add, destroy, edit, ValidateArtwork };
