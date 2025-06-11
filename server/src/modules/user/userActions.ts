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

export default { browse };
