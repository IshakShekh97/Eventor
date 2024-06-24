import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Logo />
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild size={"lg"} className="rounded-full">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Button asChild size={"lg"} className="rounded-full">
              <Link href={"/protectedroutes"}>DashBoard</Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
