import { type Response } from "express";

export const APIError = (res: Response, message: string): any => {
  return res.status(400).send({ message });
};
