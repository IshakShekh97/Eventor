import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const ProtectedPage = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <div>
      ProtectedPage
      <UserButton />
    </div>
  );
};

export default ProtectedPage;
