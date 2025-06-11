import artworkRepository from "./artworkRepository";
import type { RequestHandler } from "express";

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const result = await artworkRepository.selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { getAll };
