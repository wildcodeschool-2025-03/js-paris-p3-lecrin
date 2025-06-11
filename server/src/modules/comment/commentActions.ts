import type { RequestHandler } from "express";
import commentRepository from "./commentRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const result = await commentRepository.selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { browse };
