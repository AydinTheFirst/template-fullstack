import mongoose from "mongoose";

interface ISchema {
  id: string;
  owner: string;
  name: string;
  depertmants: string[];
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
  depertmants: {
    type: Array,
    required: [true, "Please enter your depertmants"],
    trim: true,
  },
});

export const companyModel = mongoose.model<ISchema & mongoose.Document>(
  "Company",
  schema
);

export type ICompany = ISchema;
