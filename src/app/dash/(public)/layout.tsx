"use client";

import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";

import { AuthContext } from "@/contexts/authContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuth, token } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      return redirect("/dash/panel");
    }
  }, [isAuth, token]);

  return !isAuth && children;
}
