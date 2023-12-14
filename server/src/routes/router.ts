import express from "express";

// Routers
import { AuthRouter } from "./auth.router.js";
import { SettingsRouter } from "./settings.router.js";

const app = express.Router();
export const router = app;

router.use("/auth", AuthRouter);
router.use("/settings", SettingsRouter);

router.get("/", (req, res) => {
  res.send({ message: "API is working!" });
});
