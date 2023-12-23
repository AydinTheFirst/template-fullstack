import mongoose, { Schema } from "mongoose";

interface ISchema {
  id: string;
  email: string;
  username: string;
  password: string;
  displayName: string;
  avatar: string;
  rpsw: { code: number | null; createdAt: string };
  verified: boolean;
  verifyToken: string | null;
  token: string;
  accessToken: string;
  authorizedClients: any[];
  createdAt: string;
  lastLogin: {
    ip: string;
    date: string;
  };
}

const model = mongoose.model<ISchema>(
  "user",
  new Schema({
    id: { type: String, unique: true },
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    password: { type: String },
    displayName: { type: String },
    avatar: { type: String },
    rpsw: { code: Number, createdAt: String },
    verified: { type: Boolean, default: false },
    verifyToken: { type: String },
    token: { type: String },
    accessToken: { type: String },
    createdAt: { type: String },
    lastLogin: {
      ip: { type: String, default: "" },
      date: { type: String, default: "" },
    },
  })
);

export const userModel = model;
export type IUser = ISchema;
