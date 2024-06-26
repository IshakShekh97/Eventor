import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 backdrop-blur-[2px] z-[99]">
          <Logo />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
