// import { Model } from "@/mongodb/model";
// import { addPost } from "@/mongodb/services";
// import { MongoMemoryServer } from "mongodb-memory-server";
// import mongoose, { model } from "mongoose";
// import { init } from "next/dist/compiled/webpack/webpack";

import mongoose, { ConnectOptions } from "mongoose";

// export default async function () {
//   let mongoDbMeory = await MongoMemoryServer.create();
//   let url = mongoDbMeory.getUri();
//   await mongoose.disconnect();
//   await mongoose.connect(url, { dbName: "amperage" });

//   await addPost({
//     image: "/loader.gif",
//     author: "cethar",
//     description:
//       "Чтобы сделать свой собственный сайт вам может понадобиться: хороший браузер и обычный компьютер. Первым делом скачайте редактор кода VS, затем начните писать свой первый hellow world. Это действительно просто, вот смотрите: <div>создаем разметку блока, сюда пишем контент</div>. мы создали наш первый скрипт и оффициально сделали первый мини шаг на пути к будущему. Дальше больше. Следите за моими постами,я буду частенько  писать. Удачи!!",
//     name: "Как сделать свой собственный сайт",
//     wiews: 0,
//     tags: ["js", "html"],
//   });

//   await addPost({
//     image: "/example.png",
//     author: "cethar",
//     description:
//       "Зачем учиться в IT? Часто многие задают этот вопрос, попробую ответить: Мы учимся,чтобы быть лучше других, чтобы проявлять свое превосходство над другими",
//     name: "Зачем учиться в IT",
//     wiews: 0,
//     tags: ["js", "html"],
//   });
// }

let nameDb = process.env.MONGO_URI as string;

if (!nameDb) {
  throw new Error("Имя не задано базы данных");
}

let data = global.mongoose;
if (!data) {
  data = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (data.conn) {
    return data.conn;
  }

  if (!data.promise) {
    const opt: ConnectOptions = {
      bufferCommands: false,
      socketTimeoutMS: 20000,
      maxIdleTimeMS: 10000,
      serverSelectionTimeoutMS: 20000,
    };
    data.promise = await mongoose
      .connect(nameDb, opt)
      .then((m) => m)
      .catch((err) => {
        console.log(String(err), "ошибка подклчюения");
      });
  }

  return data.promise;
}

export default dbConnect;
