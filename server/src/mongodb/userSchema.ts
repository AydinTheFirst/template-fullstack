import mongoose from "mongoose";

interface ISchema {
  id: string;
  username: string;
  displayName: string;
  email: string;
  password: string;
  role: string;
  token: string;
  avatar?: string;
  verified?: boolean;
  verifyToken?: string | null;
  rpsw?: {
    code: number | null;
    createdAt: string;
  };
}

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Please enter your id"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Please enter your username"],
    trim: true,
  },
  displayName: {
    type: String,
    required: [true, "Please enter your displayName"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    trim: true,
  },
  role: {
    type: String,
    required: [true, "Please enter your role"],
    trim: true,
  },
  token: {
    type: String,
    required: [true, "Please enter your token"],
    trim: true,
  },
  avatar: {
    type: String,
    required: [true, "Please enter your avatar"],
    trim: true,
  },
  verified: {
    type: Boolean,
    required: [true, "Please enter your verified"],
    trim: true,
  },
  verifyToken: {
    type: String,
    required: [false, "Please enter your verifyToken"],
    trim: true,
  },
  rpsw: {
    type: Object,
    required: [false, "Please enter your rpsw"],
    trim: true,
  },
});

export const userModel = mongoose.model<ISchema & mongoose.Document>(
  "User",
  schema
);

export type IUser = ISchema;
