"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex w-full flex-col items-start gap-5">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "bg-primary-500 text-black !font-extrabold"
            } flex-center p-medium-16 whitespace-nowrap rounded-lg bg-primary-foreground/20 w-full py-2 px-5`}
          >
            <Link href={link.route} className="w-full">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
