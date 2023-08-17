"use client"
import React from 'react'
import loader from '../../public/loader.gif'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='w-full flex h-screen bg-gray-50 place-content-center'>
      <Image width={500} height={500} className='mx-auto' src={loader}/>
    </div>
  )
}

export default loading