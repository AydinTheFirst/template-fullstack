import passport from "passport";
import { Strategy as Local } from "passport-local";
import { Strategy as Bearer } from "passport-http-bearer";
import { userModel } from "./schemas/user.js";
import { type RequestHandler } from "express";

passport.use(
  new Local(async (username: string, password: string, done: any) => {
    const user = await userModel.findOne({ username }).lean();
    const ok = user != null && user.password === password;

    if (!ok) {
      done(null, false, "Invalid username or password!");
    }

    // Success
    done(null, user);
  })
);

passport.use(
  new Bearer(async (token: string, done: any) => {
    const user = await userModel.findOne({ token });
    if (user == null) {
      return done(null, false);
    }
    return done(null, user, { scope: "all" });
  })
);

export const isLoggedIn: RequestHandler<unknown, any, any, unknown> =
  passport.authenticate("bearer", {
    session: false,
  });
