import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const result = await userRepository.selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const result = await userRepository.selectOne(id);
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      name: req.body.name,
      birthday: req.body.birthday,
      mail: req.body.mail,
      password: req.body.password,
      admin: req.body.admin,
      artist_id: req.body.artist_id,
    };
    // Create the user
    const insertId = await userRepository.create(newUser);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const deleteId = Number.parseInt(req.params.id);
    const deleteUser = await userRepository.deleteByID(deleteId);
    if (deleteUser.affectedRows) {
      res.json(deleteUser);
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
    const result = await userRepository.updateByID(user, id);
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add, read, destroy, edit };
