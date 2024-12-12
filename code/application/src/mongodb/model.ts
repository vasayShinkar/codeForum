import mongoose, { model } from "mongoose";
import { shema } from "./schema";

export const Model = mongoose.models.posts || model("posts", shema);
