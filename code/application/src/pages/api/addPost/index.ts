import { createRouter } from "next-connect";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/middleware/db-connect";
import { addPost } from "@/mongodb/services";
import { getToken } from "next-auth/jwt";

let multerStore = multer({
  storage: multer.diskStorage({
    destination: "./public/images",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});
let connect = createRouter<
  NextApiRequest & { file: { filename: string } },
  NextApiResponse
>();
connect.use(multerStore.single("file") as any).post(async (req, res) => {
  let token = await getToken({ req });
  if (!token?.name) {
    return res.status(400).json({ message: "пользователь не найден" });
  }
  await dbConnect();

  let data = await addPost({
    image: `/images/${req.file.filename}`,
    author: token.name,
    description: req.body.description,
    name: req.body.name,
    wiews: 0,
    tags: req.body.tags.split(","),
  });

  res.status(200).json({ message: "успешно добавлено" });
});

export const config = {
  api: {
    bodyParser: false,
  },
};
export default connect.handler();
