import type { RequestHandler } from "express";
import artistRepository from "./artistRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const result = await artistRepository.selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { browse };
