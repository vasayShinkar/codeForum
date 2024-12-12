import Image from "next/image";
import Button from "./components/Button";
import ListPosts from "./components/ListPosts";
import Link from "next/link";
import { useSession } from "next-auth/react";
import dbConnect from "@/middleware/db-connect";
import { findAllPosts } from "@/mongodb/services";
import { PostsType } from "@/mongodb/schema";

export default function Home({ posts }: { posts: PostsType }) {
  let { status } = useSession();
  return (
    <div>
      {status == "authenticated" && (
        <Button>
          <Link href={`/addPost`}>добавить пост</Link>
        </Button>
      )}
      <ListPosts data={posts} />
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:
        "query getAllPosts { getAll { image, author, description, name, wiews, tags, _id} }",
    }),
  }).then((j) => j.json());

  return {
    props: {
      posts: data.data.getAll,
    },
  };
};
