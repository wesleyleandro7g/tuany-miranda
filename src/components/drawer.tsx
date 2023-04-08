"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import { AuthContext } from "@/contexts/authContext";

import { paths } from "@/utils/routes";

export function Drawer() {
  const router = useRouter();
  const { setIsAuth, setToken } = useContext(AuthContext);

  const [routes, setRoutes] = useState(paths);
  const [isOpen, setIsOpen] = useState(false);

  function navigateTo(path: string) {
    setRoutes(() => {
      return paths.map((item) => {
        if (item.path === path) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }

        return item;
      });
    });

    router.push(`/dash/${path}`);
  }

  function hadleLogout() {
    setIsAuth(false);
    setToken(undefined);
    localStorage.removeItem("token");
  }

  return (
    <aside
      id="drawer"
      className={`flex flex-col items-center h-screen gap-4 bg-white relative ${
        isOpen ? "w-72 min-w-72" : "w-18 min-w-18"
      } `}
    >
      <Image
        src="/tuany-logo-rose.svg"
        alt="logo"
        width={isOpen ? 180 : 80}
        height={56}
        className="p-4"
      />

      <div
        className={`flex flex-col gap-2 w-full h-full ${
          isOpen ? "pl-3" : "px-3"
        }`}
      >
        {routes.map((path) => (
          <button
            key={path.name}
            onClick={() => navigateTo(path.path)}
            className={`flex items-center gap-4 w-full h-12 ${
              isOpen ? "rounded-l-full" : "rounded-full"
            } ${isOpen ? "pl-4" : "justify-center"} ${
              path.isSelected ? "bg-gray-200" : "bg-transparent"
            } text-slate-800 hover:bg-gray-100`}
          >
            {path.isSelected ? (
              <path.iconFocused className="text-xl text-primary" />
            ) : (
              <path.icon className="text-xl" />
            )}
            <span
              className={`${isOpen ? "block" : "hidden"} uppercase font-medium`}
            >
              {path.name}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={hadleLogout}
        className={`flex items-center gap-4 w-full my-2 h-12 ${
          isOpen ? "pl-4" : "justify-center"
        } bg-transparent text-slate-800 hover:bg-gray-100`}
      >
        <IoLogOutOutline className="text-xl" />
        <span
          className={`${isOpen ? "block" : "hidden"} uppercase font-medium`}
        >
          sair
        </span>
      </button>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`toggleDrawer flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-gray-200 text-white absolute top-8 right-[-12px] duration-200 ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
      >
        <IoIosArrowBack />
      </button>
    </aside>
  );
}
