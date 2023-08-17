"use client"
import React from 'react'
import loader from '../public/loader.gif'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='w-full justify-center items-center flex h-screen  place-content-center'>
      <Image  className='mx-auto w-[100px] bg-black h-[100px] ' src={loader}/>
    </div>
  )
}

export default loading