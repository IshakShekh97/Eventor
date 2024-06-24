import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <p className="flex gap-2 items-center justify-start">
      <Image
        width={28}
        height={28}
        src="/assets/icons/logo-grey.svg"
        alt="logo"
        className="bg-violet-700 p-1 dark:bg-violet-500 rounded-[5px]"
      />
      <span className="text-xl max-sm:text-lg font-semibold">Eventor</span>
    </p>
  );
};

export default Logo;
