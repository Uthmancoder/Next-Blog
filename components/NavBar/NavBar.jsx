"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../Buttton/Button";
import DarkmodeToggle from "../DarkmodeToggle/DarkmodeToggle";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {

  const Session = useSession()
  const [menu, setmenu] = useState(false);

  const handleMenu = () => {
    setmenu(!menu);
  };

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className="flex p-5  max-w-[1200px] mx-auto justify-between h-20 w-full ">
      <Link href="/" className="font-extrabold  text-xl text-[#00df9a] ">
        Next
      </Link>

      <div className="hidden md:block  ">
        <div className="flex items-center">
          <DarkmodeToggle />
          {links.map((link) => (
            <Link
              className="p-4  hover:border-b-2 border-green-400"
              key={link.id}
              href={link.url}
            >
              {" "}
              {link.title}
            </Link>
          ))}
          {Session.status === "authenticated" &&
           <Button onClick={signOut} url="/" text="Log Out" /> 
          }
        </div>
      </div>
      <div onClick={handleMenu} className="block  md:hidden">
        {menu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          menu
            ? "grid fixed left-0 top-0  w-[60%] bg-[#111211] z-50 h-screen border-r-[#00400] ease-in-out duration-300"
            : " fixed grid left-[-60%]"
        }
      >
        <Link href="/" className="font-extrabold  text-xl m-5 text-[#00df9a] ">
          Next
        </Link>
        {links.map((link) => (
          <Link
            className="p-4   uppercase  border-b  border-gray-500"
            key={link.id}
            href={link.url}
          >
            {" "}
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
