import argon from "argon2";
import type { Request, RequestHandler } from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import userRepository from "./userRepository";
import type { User } from "./userRepository";

export interface AuthenticationRequest extends Request {
  user?: User;
}

interface PayloadToken extends jwt.JwtPayload {
  id?: number;
}

const ValidateUser: RequestHandler = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(1).max(255).required(),
    birthday: Joi.date().iso().less("now").required(),
    mail: Joi.string().email().required(),
    password: Joi.string().alphanum().min(1).max(255).required(),
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

const create: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    user.password = await argon.hash(user.password);
    const affectedRows = await userRepository.add(user);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    if (affectedRows) res.sendStatus(201);
    else res.sendStatus(422);
  } catch (err) {
    next(err);
  }
};

const login: RequestHandler = async (req, res, next) => {
  try {
    const { mail, password } = req.body;
    const user = await userRepository.readByEmail(mail);
    if (!user) res.status(422).json("Utilisateur introuvable.");
    else {
      const confirmPassword = await argon.verify(user.password, password);
      if (!confirmPassword)
        res.status(422).json("L'identifiant ou le mot de passe est incorrect.");
      else {
        const token = jwt.sign(
          { id: user.id, admin: user.admin },
          process.env.APP_SECRET as string,
        );
        const { password, ...userWithoutPassword } = user;
        res.json({ userWithoutPassword, token });
      }
    }
  } catch (error) {
    next(error);
  }
};

const isAuth: RequestHandler = async (
  req: AuthenticationRequest,
  res,
  next,
) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      res.status(401).json("Authorisation manquant.");
    } else {
      const token = authorization.split(" ")[1];
      if (!token) res.status(401).json("Token manquant.");
      else {
        const payload = jwt.verify(
          token,
          process.env.APP_SECRET as string,
        ) as PayloadToken;
        const user = (await userRepository.selectOne(
          payload?.id as number,
        )) as User;
        req.user = user;
        next();
      }
    }
  } catch (error) {
    next(error);
  }
};

const isAdmin: RequestHandler = async (req, res, next) => {
  const { admin } = req.body.user;
  if (!admin) res.status(403).json("Vous n'avez pas les droits.");
  else next();
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
//faire une verif sur le le user qui supprime et le compte sur lequel il est co

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
//faire une verif sur le le user qui modifie et le compte sur lequel il est co

export default {
  browse,
  create,
  login,
  destroy,
  edit,
  ValidateUser,
  isAuth,
  isAdmin,
};
