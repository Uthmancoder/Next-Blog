import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare , FaGithubSquare, FaInstagram,FaTwitterSquare } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="max-w-[1100px]  mx-auto py-12   grid lg:grid-cols-3  gap-8 ddd">
      <div className='mt-2'>
      <Link href="/" className="font-extrabold m-5  text-xl text-green-800 ">
         <span className="text-3xl text-yellow-800">X</span>Blog
      </Link>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae
          possimus deleniti iusto! Mollitia enim recusandae vitae necessitatibus
          nulla! Iste asperiores consequuntur sunt exercitationem ad numquam
          similique consectetur, dicta molestiae?
        </p>

        <div className="flex md:w-[75%] my-6 justify-between">
          <FaDribbbleSquare size={20} />
          <FaFacebookSquare size={20} />
          <FaGithubSquare size={20} />
          <FaInstagram size={20} />
          <FaTwitterSquare size={20} />
        </div>
      </div>
      <div className="lg:col-span-2   mt-5 flex justify-between">
        <div>
          <h4 className="font-bold text-xl ">Solutions</h4>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl ">Support </h4>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl ">Company</h4>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer