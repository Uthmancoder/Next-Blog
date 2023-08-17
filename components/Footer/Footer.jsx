import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare , FaGithubSquare, FaInstagram,FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1100px]  mx-auto py-12   grid lg:grid-cols-3  gap-8  text-gray-300">
      <div className='mt-2'>
        <h1 className="text-[#00df9a] w-full  font-bold text-2xl">Next</h1>
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
          <h4 className="font-bold text-xl  text-gray-400">Solutions</h4>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl  text-gray-400">Support </h4>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl  text-gray-400">Company</h4>
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