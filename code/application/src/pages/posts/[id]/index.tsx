import Button from "@/pages/components/Button";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Image from "next/image";
import Link from "next/link";

export default function (
  props: InferGetServerSidePropsType<GetServerSideProps>
) {
  let post = props.data;
  return (
    <div className="flex flex-col gap-y-[20px]">
      <Image
        src={post.image}
        alt={post.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[100%] h-auto"
      />
      <div>
        <h1>{post.name}</h1>
      </div>
      <div>{post.description}</div>

      <div className="flex justify-between">
        <div className="flex gap-x-3">
          {post?.tags?.length &&
            post.tags.map((e: string) => {
              return (
                <span className="inline-block p-2 border-2 border-black">
                  #{e}
                </span>
              );
            })}
        </div>
        <div>
          <img className="w-5 h-3" src="/eye-icon.png" />
          {post.wiews}
        </div>
      </div>
      <div>
        {post.author}
        <Button>
          <Link href={`/user/${encodeURIComponent(post.author)}`}>
            перейти на автора
          </Link>
        </Button>
      </div>
    </div>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation setWIew { updateWiew(id: "${context.query.id}") { wiews} }`,
    }),
  })
    .then((r) => {
      return r.json();
    })
    .then((r) => {
      console.log(r);
    });

  let data = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query getAllPosts { getAllById(id: "${context.query.id}") { image, author, description, name, wiews, tags, _id} }`,
    }),
  }).then((j) => j.json());

  return {
    props: {
      data: data.data.getAllById,
    },
  };
};
