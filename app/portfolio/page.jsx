"use client"
import React from 'react'
import Image from 'next/image'
import photoshop from '../../public/Application.jpg'
import photography from '../../public/Businessimage.jpg'
import design from '../../public/illustration.jpg'
import Link from 'next/link'


const page = () => {
  return (
    <div className='max-w-[900px] ml-0 md:ml-16'>
       <div className='grid gap-4  md:grid-cols-2  lg:grid-cols-3 max-w-[900px]'>
          <Link href="/portfolio/illustration" className='border-2 border-gray-300 rounded-md w-fit relative hover:text-green-700'>
             <Image width={500} className=''  src={design}/>
             <h1 className='absolute right-2 bottom-2 font-bold text-2xl'>Illusrations</h1>
          </Link>
          <Link href="/portfolio/appliction" className='border-2 border-gray-300 rounded-md w-fit relative hover:text-green-700'>
             <Image width={500} className=''  src={photoshop}/>
             <h1 className='absolute right-2 bottom-2 font-bold text-2xl'>Applications</h1>
          </Link>
          <Link href="portfolio/business" className='border-2 border-gray-300 rounded-md w-fit relative hover:text-green-700'>
             <Image width={500} className='' src={photography}/>  
             <h1 className=' absolute right-2 bottom-2 font-bold text-2xl'>Business</h1>
          </Link>
       </div>
    </div>
  )
}

export default page