import { resolvers } from "@/graphql/resolvers";
import shema from "@/graphql/shema";
import dbConnect from "@/middleware/db-connect";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { devNull } from "os";

let server = new ApolloServer({ resolvers: resolvers, typeDefs: shema });

let handler = startServerAndCreateNextHandler(server);

const dbConnectHandler =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();
    return await fn(req, res);
  };

const headersHandler =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Allow", "POST");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
      res.status(200).end();
    }
    return await fn(req, res);
  };
export default dbConnectHandler(headersHandler(handler));
