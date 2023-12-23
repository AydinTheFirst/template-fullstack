import express from "express";
import cors from "cors";
import passport from "passport";
import http from "node:http";
import { Server } from "socket.io";

import { router } from "./routes/router.js";
import { upload } from "./helpers/multer.js";

const PORT = 3000;
const app = express();
const server = http.createServer(app);
export const io = new Server(http.createServer(app));

// Init App
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.any());

app.use(passport.initialize());

app.use(router);

server.listen(3000, () => {
  console.log(`http://localhost:${PORT}`);
});
