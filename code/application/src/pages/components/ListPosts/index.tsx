import Image from "next/image";
import Button from "../Button";
import ListPostItem from "../ListPostItem";
import { PostsType } from "@/mongodb/schema";

type props = {
  data: PostsType[];
};
export default function ({ data }: props) {
  return (
    <div>
      {data.length ? (
        <div className="flex justify-between flex-wrap gap-y-7 mt-5">
          {data.map((item) => {
            return <ListPostItem data={item} />;
          })}
        </div>
      ) : (
        <div>there is nothing ;(</div>
      )}
    </div>
  );
}
