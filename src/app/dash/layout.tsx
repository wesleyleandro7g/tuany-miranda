"use client";

import { useContext, useEffect } from "react";

import { AuthContext } from "@/contexts/authContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setIsAuth, setToken } = useContext(AuthContext);

  useEffect(() => {
    const hasToken = localStorage.getItem("token");

    if (hasToken) {
      setToken(hasToken);
      setIsAuth(true);
    }
  }, []);

  return <div className="min-h-screen bg-gray-200">{children}</div>;
}
