import express from "express";

// Routers
import { AuthRouter } from "./auth.router.js";

const app = express.Router();
export const router = app;

router.use("/auth", AuthRouter);

router.get("/", (req, res) => {
  res.send({ message: "API is working!" });
});
