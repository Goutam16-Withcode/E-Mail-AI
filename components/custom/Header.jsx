"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/stateful-button'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm px-10'>
      <Image src={'/logo.svg'} width={180} height={140} alt="Logo"/>
      <div>
       <Button 
         className="bg-[#7f57f1] hover:ring-[#7f57f1]"
         onClick={() => console.log('Get Started clicked')}
       >
         Get Started
       </Button>
      </div>
    </div>
  )
}

export default Header
