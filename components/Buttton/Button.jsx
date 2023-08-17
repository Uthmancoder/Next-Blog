"use client"
import React from 'react'
import Link from "next/link"

const Button = ({url, text}) => {
  return (
    <Link href={url}>
       <button className='bg-[rgb(5,129,90)] text-gray-50 rounded-md  font-bold px-5 py-2 w-fit'>{text}</button>
    </Link>
  )
}

export default Button
