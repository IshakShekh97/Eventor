import Logo from "@/components/shared/Logo";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full">
      <div className="border-b pb-2 border-black dark:border-white">
        <Logo />
      </div>
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default layout;
