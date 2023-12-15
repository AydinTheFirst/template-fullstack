import { v4 } from "uuid";
import { userModel } from "./schemas/user.js";

import crypto from "crypto-js";

export const genToken = async (length = 128): Promise<string> => {
  let token = "";

  const generate = (): any => {
    token = v4();
  };

  const users = await userModel.find().lean();

  do {
    generate();
  } while (users.find((u) => u.token === token) != null);

  return token;
};

export const encrypt = (data: string): crypto.lib.CipherParams => {
  return crypto.AES.encrypt(data, process.env.secret_key!);
};

export const decrypt = (data: string): string => {
  const bytes = crypto.AES.decrypt(data, process.env.secret_key!);

  return bytes.toString(crypto.enc.Utf8);
};
