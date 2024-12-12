import { InferSchemaType, Schema } from "mongoose";

export const shema = new Schema({
  image: {
    required: true,
    type: "String",
  },
  author: {
    required: true,
    type: "String",
  },
  description: {
    required: true,
    type: "String",
  },
  name: {
    required: true,
    type: "String",
  },
  wiews: {
    required: true,
    type: "Number",
  },
  tags: {
    required: true,
    type: ["String"],
  },
});

export type PostsType = InferSchemaType<typeof shema>;
