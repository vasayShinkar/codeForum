import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

type props = {
  data: any;
};
export default function ({ data }: props) {
  return (
    <div className="basis-[32%]" key={data.name}>
      <Image src={data.image} height={200} width={300} alt={data.name} />
      <div className="flex justify-between p-2 bg-slate-100 rounded-b-lg">
        <h1>{data.name}</h1>
        <Button>
          <Link href={`/posts/${data._id}`}>перейти</Link>
        </Button>
      </div>
    </div>
  );
}
