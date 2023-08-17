"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit =  async(ev)=>{
     ev.preventDefault()
    const name = ev.target[0].value
    const email = ev.target[1].value
    const password = ev.target[2].value

    try {
      const res = await  fetch("/api/auth/register", {
        method : "POST",
        headers :{
          "Content-Type" : "application/json" 
        },
        body : JSON.stringify({
          name,
          email,
          password
        }) 
      })
      res.status === 201 && router.push("/dashboard/login? success=Account has been created successfully")
    } catch (error) {
      setError(true)
    }

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="w-[50%] mx-auto bg-gray-100 rounded-xl mt-12 p-5 grid grid-cols-1 ">
        <div>
          <input
            className="w-full bg-gray-200 p-2 text-black  my-3 rounded-lg "
            placeholder="Username"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div>
          <input className="w-full bg-gray-200 p-2 text-black  my-3 rounded-lg " placeholder="Email" type="email" name="email" id="email" />
        </div>
        <div>
          <input
          className="w-full bg-gray-200 p-2 text-black  my-3 rounded-lg "
            placeholder="Password"
            type="password"
            name="username"
            id="Password"
          />
        </div>
        <button type="submit" className="bg-black py-2 px-5 w-fit mx-auto mt-3 focus:ring-4 ring-gray-300 rounded-3xl text-white">Register</button>
        <Link className="text-[13px] text-blue-600" href="/dashboard/login">Login with an existing account</Link>

        {error ? "Error signing up" : null }
      </form>
      
    </div>
  );
};

export default page;
