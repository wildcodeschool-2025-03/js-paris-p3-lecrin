import type { RequestHandler } from "express";
import collectionRepository from "./collectionRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const result = await collectionRepository.selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { browse };
