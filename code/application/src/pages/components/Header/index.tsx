import Image from "next/image";
import logo from "public/logo.png";
import Button from "../Button";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function () {
  let { status, data: user } = useSession();
  return (
    <div className="flex justify-between bg-slate-50 rounded-[10px] p-2 items-center m-2 top-[0px] z-10 sticky drop-shadow-lg">
      <Link href={"/"}>
        <div className="flex gap-x-3 items-center">
          <Image src={logo} alt="logo" className="w-[30px] h-[30px]" />
          <h1>Amperage</h1>
        </div>
      </Link>

      <div>
        {status !== "authenticated" && (
          <Button>
            <span onClick={() => signIn()}>Войти</span>
          </Button>
        )}
        {status == "authenticated" && (
          <>
            <span className="inline-block pr-4">{user?.user?.name}</span>
            <Button>
              <span onClick={() => signOut()}>Выйти</span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
