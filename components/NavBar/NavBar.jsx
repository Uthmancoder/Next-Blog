"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Button from "../Buttton/Button";
import { signOut, useSession } from "next-auth/react";
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook, BsYoutube } from 'react-icons/bs'

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
      url: "portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "blog",
    },
    {
      id: 4,
      title: "About",
      url: "about",
    },
    {
      id: 5,
      title: "Contact",
      url: "contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "dashboard",
    },
  ];
  // Get the current pathname
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <div className=" w-full ">
      <div className="flex p-5  max-w-[1200px] mx-auto justify-between items-center h-20 w-full ">
        <Link href="/" className="font-extrabold  text-2xl  ">
          <span className="text-3xl text-[#FE6776]">X</span><span className="title">Blog</span>
        </Link>

        <div className="hidden md:block  ">
          <div className="flex items-center">

            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`p-4 font-semibold ${currentPath === link.url ? "p-4 bg-gradient-to-r from-[#FE5B73] via-[#FE787B] to-[#FE9484] py-2 px-8 rounded-3xl ml-3 hover:bg-gradient-to-r transition-all ease-in-out 2s hover:from-[#FE9484] hover:via-[#FE787B] hover:to-[#FE5B73]" : "p-4 font-semibold"
                  }`}
              >
                {link.title}
              </Link>
            ))}
             <button className="bg-gradient-to-r from-[#FE5B73] via-[#FE787B] to-[#FE9484] py-2 px-8 rounded-3xl ml-3 hover:bg-gradient-to-r transition-all ease-in-out 1s hover:from-[#FE9484] hover:via-[#FE787B] hover:to-[#FE5B73]">
            Login
          </button>
            {Session.status === "authenticated" &&
              <Button onClick={signOut} url="/" text="Log Out" />
            }
          </div>
        </div>

        {/* [<div className="flex items-center ">
          <Link className="p-2" href=""><AiFillInstagram size={20} /></Link>
          <Link className="p-2" href=""><AiFillLinkedin size={20} /></Link>
          <Link className="p-2" href="" ><AiFillTwitterCircle size={20} /></Link>
          <Link className="p-2" href=""> <BsFacebook size={20} /></Link>
          <Link className="p-2" href="">  <BsYoutube size={20} /></Link>
         
        </div>] */}

        <div onClick={handleMenu} className="block  md:hidden">
          {menu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* media screen bar */}
      <div
        className={
          menu
            ? "grid fixed left-0 top-0  w-[60%] bg-[#111211] z-50 h-screen border-r-[#00400] ease-in-out duration-300"
            : " fixed grid left-[-60%]"
        }
      >
        <Link href="/" className="font-extrabold m-5  text-xl text-green-800 ">
          <span className="text-3xl text-yellow-800">X</span>Blog
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
