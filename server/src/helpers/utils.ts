import { IUser, userModel } from "./schemas/user.js";

export const genToken = async (): Promise<string> => {
  let token = "";

  const generate = (): any => {
    token = uuid();
  };

  const users = await userModel.find().lean();

  do {
    generate();
  } while (users.find((u: IUser) => u.token === token) != null);

  return token;
};

export const uuid = (): string => crypto.randomUUID();
