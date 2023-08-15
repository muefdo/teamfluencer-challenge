import React from "react";

import Link from "next/link";

import logo from "../../public/teamfluencer.webp";
import Image from "next/image";

const routes = [
  {
    label: "Find Creator",

    href: "/",
    color: "text-sky-500",
  },
  {
    label: "New Campaign",
    href: "/",
    color: "text-red-400",
  },
  {
    label: "Settings",
    href: "/",
    color: "text-purple-500",
  },

];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col w-full h-full text-slate-600">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative">
            <Image alt="Logo" src={logo} className="h-9/12 w-9/12" />
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-md group flex p-3 w-full justify-start font-semibold cursor-pointer hover:text-slate-100 hover:bg-slate-400 transition duration-200 ease-in-out"
            >
              <div className="flex items-center flex-1 font-extralight">
                <p>{route.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
