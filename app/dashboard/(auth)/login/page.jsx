"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const page = () => {

  const session = useSession()
  // const router = useRouter()

  if (session.status === 'authenticated') {
    // Redirect to login page if not authenticated
    window.location.href = '/dashboard'; // Use window.location.href for navigation
  }else  if (session.status === 'loading') {
    return( 
      <p>Loading...</p>
    )
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const email = ev.target[0].value;
    const password = ev.target[1].value

    signIn("credentials", email, password)
  };

  return (
    <div>
      <h1 className="text-white font-bold text-3xl">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-[50%] mx-auto bg-gray-100 rounded-xl text-[17px] mt-12 p-5 grid grid-cols-1 "
        >
          <div>
            <input
              className="w-full bg-gray-200 py-1 px-3 focus:ring ring-slate-400 outline-none text-black  my-3 rounded-lg "
              placeholder="Email"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div>
            <input
              className="w-full bg-gray-200 py-1 px-3 focus:ring ring-slate-500 outline-none text-black  my-3 rounded-lg "
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-800 py-1 px-5 w-fit mx-auto mt-3 focus:ring-4 ring-gray-300 rounded-3xl text-white"
          >
            Log In
          </button>
        </form>
        {/* <button className='border border-x-gray-300 rounded-2xl text-xs p-2 shadow-2' onClick={()=> signIn("google")}>Signin with google </button> */}
      </h1>
    </div>
  );
};

export default page;
