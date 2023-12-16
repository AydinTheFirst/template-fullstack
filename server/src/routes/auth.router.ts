import express from "express";
import passport from "passport";
import { isLoggedIn } from "../helpers/passport.js";
import { APIError } from "./helper.router.js";
import { genToken, uuid } from "../helpers/utils.js";
import { userModel, type IUser } from "../helpers/schemas/user.js";

const router = express.Router();

export const AuthRouter = router;

// Kullanıcı bilgilerini getir
router.get("/@me", isLoggedIn, (req, res) => {
  const user = req.user as IUser;
  user.password = ""; // Şifreyi gizle
  res.send(user);
});

router.post("/login", (req, res) => {
  passport.authenticate(
    "local",
    async (err: any, user: IUser | null, message: string) => {
      if (err) return APIError(res, err);
      if (!user) return APIError(res, message);

      const model = await userModel.findOne({ id: user.id });
      if (!model) return APIError(res, "User is not found!");

      const ip = req.headers["x-forwarded-for"];

      // Modify User
      model.lastLogin.ip = String(ip);
      model.lastLogin.date = Date.now().toString();
      model.token = await genToken(); // This refreshes token for each login!
      // Update User
      await model.save();

      return res.send({ token: "Bearer " + model.token });
    }
  )(req, res);
});

// Yeni kullanıcı kaydı
router.post("/register", async (req, res) => {
  const { email, password, displayName } = req.body;
  const username = req.body.username.toLowerCase();

  // Kullanıcı adı veya e-posta adresi veritabanında mevcutsa kontrol et
  const userExist = await userModel.findOne({ $or: [{ username }, { email }] });

  if (userExist) {
    return APIError(res, "This username/email is already taken!");
  }

  // return res.send({ ok: true });

  // Yeni kullanıcı verisini oluştur ve kaydet
  const newUser = await userModel.create({
    id: uuid(),
    createdAt: new Date(),
    displayName,
    username,
    email,
    password,
    token: await genToken(),
  });

  res.send(newUser);
});
