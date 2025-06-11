import type { RequestHandler } from "express";
import artworkRepository from "./artworkRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const result = await artworkRepository.selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { browse };
