import { PropsWithChildren } from "react";
import Header from "./Header";
import Container from "./container";

export default function ({ children }: PropsWithChildren) {
  return (
    <>
      <Container>
        <Header />
        {children}
      </Container>
    </>
  );
}
