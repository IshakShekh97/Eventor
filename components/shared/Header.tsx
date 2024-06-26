import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="w-full fixed top-5 left-0">
      <header className="w-[80%] md:max-w-xl xl:px-5 mx-auto border rounded-lg bg-transparent backdrop-blur-[3px]">
        <div className="wrapper max-w-xl flex items-center justify-between">
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
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </SignedIn>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
