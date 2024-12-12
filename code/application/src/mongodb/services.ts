import dbConnect from "@/middleware/db-connect";
import { Model } from "./model";
import { PostsType } from "./schema";

export const findAllPosts = async () => {
  let data = await Model.find();
  return await data;
};

export const getAllById = async (id: string) => {
  return await Model.findById(id);
  Model.findByIdAndDelete;
};

export const getAllByUserName = async (author: string) => {
  let filter = { author };
  return await Model.find(filter);
};

export const addPost = async (post: PostsType) => {
  return await Model.create(post);
};

export const updateWiew = async (id: string) => {
  return await Model.findByIdAndUpdate(
    id,
    { $inc: { wiews: 1 } },
    { new: true }
  );
};
