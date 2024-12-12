import ListPosts from "@/pages/components/ListPosts";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

export default function (
  props: InferGetServerSidePropsType<GetServerSideProps>
) {
  return (
    <div>
      user: {props.name}
      <ListPosts data={props.data} />
    </div>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let name = decodeURIComponent(context.query.id as string);
  let data = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query getAllPosts { getAllByUserName(name: "${name}") { image, author, description, name, wiews, tags, _id} }`,
    }),
  }).then((result) => {
    console.log(result);
    return result.json();
  });
  return {
    props: {
      data: data.data.getAllByUserName,
      name,
    },
  };
};
