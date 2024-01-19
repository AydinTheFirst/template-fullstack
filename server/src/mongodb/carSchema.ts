import mongoose from "mongoose";

interface ISchema {
  id: string;
  owner: string;
  name: string;
  category: string;
  price: string;
  images: string[];
  description: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  isAvailable: boolean;
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
  category: {
    type: String,
    required: [true, "Please enter your category"],
    trim: true,
  },
  price: {
    type: String,
    required: [true, "Please enter your price"],
    trim: true,
  },
  images: {
    type: Array,
    required: [true, "Please enter your images"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter your description"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "Please enter your location"],
    trim: true,
  },
  createdAt: {
    type: String,
    required: [true, "Please enter your createdAt"],
    trim: true,
  },
  updatedAt: {
    type: String,
    required: [true, "Please enter your updatedAt"],
    trim: true,
  },
  isAvailable: {
    type: Boolean,
    required: [true, "Please enter your isAvailable"],
    trim: true,
  },
});

export const carModel = mongoose.model<ISchema & mongoose.Document>(
  "Car",
  schema
);

export type ICar = ISchema;
