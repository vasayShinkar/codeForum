import dbConnect from "@/middleware/db-connect";
import { PostsType } from "@/mongodb/schema";
import {
  addPost,
  findAllPosts,
  getAllById,
  getAllByUserName,
  updateWiew,
} from "@/mongodb/services";

export const resolvers = {
  Query: {
    getAll: async (_: any) => {
      try {
        let post = await findAllPosts();
        return post;
      } catch (err) {
        console.log(err);
        return new Error(`Ошибка получения данных ${err}`);
      }
    },
    getAllById: async (_: any, { id }: { id: string }) => {
      try {
        let post = await getAllById(id);
        return post;
      } catch (err) {
        return new Error(`Ошибка получения данных по id: ${err}`);
      }
    },
    getAllByUserName: async (_: any, { name }: { name: string }) => {
      try {
        let post = await getAllByUserName(name);
        return post;
      } catch (err) {
        return new Error(`Ошибка получения данных по name: ${err}`);
      }
    },
  },
  Mutation: {
    updateWiew: async (_: any, { id }: { id: string }) => {
      try {
        let post = await updateWiew(id);
        return post;
      } catch (err) {
        return new Error(`Ошибка обновления зрителей ${err}`);
      }
    },
    addPost: async (_: any, { data }: { data: PostsType }) => {
      try {
        let post = await addPost(data);
        return post;
      } catch (err) {
        return new Error(`Ошибка обновления добавления ${err}`);
      }
    },
  },
};
