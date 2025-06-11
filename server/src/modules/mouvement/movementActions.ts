import type { RequestHandler } from "express";
import movementRepository from "./movementRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const result = await movementRepository.selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { browse };
