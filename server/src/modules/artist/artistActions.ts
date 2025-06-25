import type { RequestHandler } from "express";
import Joi from "joi";
import movementRepository from "../mouvement/movementRepository";
import artistRepository from "./artistRepository";

const ValidateArtist: RequestHandler = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(1).max(255).required(),
    description: Joi.string().alphanum().required(),
    death_date: Joi.date().max("now"),
    birthday: Joi.date().required(),
  });

  const result = schema.validate(req.body, { abortEarly: false });
  if (result.error) res.status(400).json(result.error);
  else next();
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const artists = await artistRepository.selectAll();
    res.json(artists);
  } catch (error) {
    next(error);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const artist = await artistRepository.selectOne(id);
    artist.movements = await movementRepository.selectAllByArtwork(id);

    if (artist != null) {
      res.json(artist);
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
    const result = await artistRepository.updateById(artist, id);
    if (result) {
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
};
const add: RequestHandler = async (req, res, next) => {
  try {
    const newArtist = req.body;
    const result = await artistRepository.create(newArtist);
    if (result) {
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
    const result = await artistRepository.deleteById(id);
    if (result.affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

export default { browse, read, edit, add, destroy, ValidateArtist };
