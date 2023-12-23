import express from "express";
import { isLoggedIn } from "../helpers/passport.js";
import { APIError, formatTime, genToken } from "../helpers/utils.js";
import { type IUser, userModel } from "../helpers/schemas/user.js";
import { mailer } from "../helpers/mailer.js";
import crypto from "crypto";

const router = express.Router();
export const SettingsRouter = router;

router.get("/verify", async (req, res) => {
  const verifyToken = req.query.token?.toString().replace("?", "");
  const userId = req.query.userId?.toString().replace("?", "");

  if (!verifyToken || !userId) return APIError(res, "Invalid arguments");

  const model = await userModel.findOne({ id: userId });

  if (!model || model.verifyToken !== verifyToken) {
    return APIError(res, "Invalid verify token!");
  }

  if (model.verified) {
    return APIError(res, "User is already verified!");
  }

  model.verified = true;
  model.verifyToken = null;
  await model.save();

  return res.sendStatus(200);
});

router.post("/verify", isLoggedIn, async (req, res) => {
  const { id } = req.user as IUser;

  const user = await userModel.findOne({ id });

  if (!user || user.verified || user.verifyToken) {
    return APIError(
      res,
      "User is not found or user has ongoing verification process or user is already verified!"
    );
  }

  const verificationUrl =
    req.headers.origin + `/verifyEmail?token=${user.verifyToken}&userId=${id}`;

  try {
    await mailer.sendVerification(user, verificationUrl);
  } catch (error) {
    return APIError(res, String(error));
  }

  await user.save();

  res.sendStatus(200);
});

router.post("/resetPassword", async (req, res) => {
  const email = req.body.email;

  const user = await userModel.findOne({ email });

  if (!user) return APIError(res, "User is not found!");

  const cooldownDuration = 5 * 60 * 1000;
  const now = Date.now();

  const rpsw = user.rpsw;

  const lastRequest = now - Number(rpsw.createdAt);
  const remained = cooldownDuration - lastRequest;

  if (rpsw.code && lastRequest < cooldownDuration) {
    return APIError(
      res,
      `You can request another code in ${formatTime(remained)}!`
    );
  }

  rpsw.code = crypto.randomInt(100000, 1000000);
  rpsw.createdAt = String(now);

  const ok = await mailer.sendResetPsw(user, String(rpsw.code));
  if (!ok) return APIError(res, "Could not send email to:" + user.email);

  user.rpsw = rpsw;
  await user.save();

  res.sendStatus(200);
});

router.put("/resetPassword", async (req, res) => {
  const code = req.body.code;
  const email = req.body.email;
  const password = req.body.password;

  const user = await userModel.findOne({ email });

  if (!user) {
    return APIError(res, "User is not found!");
  }

  if (Number(code) !== user.rpsw.code) {
    return APIError(res, "Invalid reset code!");
  }

  if (password === user.password) {
    return APIError(res, "You can not use same password!");
  }

  user.password = password;
  user.rpsw.code = null;
  user.token = await genToken();

  await user.save();

  res.sendStatus(200);
});

router.post("/updateProfile", isLoggedIn, async (req, res) => {
  const body = req.body;
  const { id } = req.user as IUser;

  const user = await userModel.findOne({ id });
  if (!user) return res.sendStatus(400);

  // Check Password
  if (user.password !== body.password) {
    return APIError(res, "Wrong password!");
  }

  // Update Username
  if (user.username !== body.username) {
    const isUsed = await userModel.findOne({ username: body.username });
    if (isUsed) return APIError(res, "Username is not available");

    user.username = body.username;
  }

  // Update Email
  if (user.email !== body.email) {
    const isUsed = await userModel.findOne({ email: body.email });
    if (isUsed) return APIError(res, "Email is not available");

    user.email = body.email;
  }

  user.avatar = body.avatar;
  user.displayName = body.displayName;

  await user.save();

  res.sendStatus(200);
});
