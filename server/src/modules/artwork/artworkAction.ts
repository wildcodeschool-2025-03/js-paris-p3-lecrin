import type { RequestHandler } from "express";
import artworkRepository from "./artworkRepository";

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const result = await artworkRepository.selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { getAll };
