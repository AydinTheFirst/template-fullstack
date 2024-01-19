import mongoose from "mongoose";

interface ISchema {
  id: string;
  owner: string;
  name: string;
  location: string;
  users: string[];
}

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Please enter your id"],
    trim: true,
  },
  owner: {
    type: String,
    required: [true, "Please enter your owner"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "Please enter your location"],
    trim: true,
  },
  users: {
    type: Array,
    required: [true, "Please enter your users"],
    trim: true,
  },
});

export const depertmantModel = mongoose.model<ISchema & mongoose.Document>(
  "Depertmant",
  schema
);

export type IDepertmant = ISchema;
