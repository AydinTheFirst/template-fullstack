import multer from "multer";
import * as fs from "fs";
import crypto from "crypto";

const dir = fs.existsSync("uploads");
if (!dir) fs.mkdirSync("uploads");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req: any, file: any, cb: any) => {
    cb(null, crypto.randomUUID() + "." + file.mimetype.split("/")[1]);
  },
});

export const upload = multer({ storage });
