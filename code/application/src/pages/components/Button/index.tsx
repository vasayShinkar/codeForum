import Image from "next/image";
import logo from "public/logo.png";
import { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <button className="bg-slate-200 rounded-md px-4 py-1 hover:bg-slate-300 duration-500 drop-shadow-xl">
      {children}
    </button>
  );
}
