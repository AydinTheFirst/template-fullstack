import express from "express";
import { AuthRouter } from "./auth.router";

const router = express.Router();
export { router as ApiRouter };

router.use("/auth", AuthRouter);

router.get("/", (req, res) => {
  res.send({ message: "API is working!" });
});
