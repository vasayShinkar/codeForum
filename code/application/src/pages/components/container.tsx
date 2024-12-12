import { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return <div className="max-w-[900px] mx-auto p-3">{children}</div>;
}
