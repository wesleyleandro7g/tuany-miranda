"use client";

import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";

import { Drawer } from "@/components/drawer";
import { AuthContext } from "@/contexts/authContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuth, token } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      return redirect("/dash");
    }
  }, [isAuth, token]);

  return (
    isAuth && (
      <div className="flex bg-white">
        <Drawer />
        <div className="w-full px-4 mt-2 bg-gray-200 rounded-l-3xl">
          {children}
        </div>
      </div>
    )
  );
}
