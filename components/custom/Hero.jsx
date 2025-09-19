"use client";
import React from 'react'
import { LayoutTextFlip } from '../ui/layout-text-flip'
import { Button } from '../ui/stateful-button'
import Image from 'next/image'
import { useGoogleLogin } from '@react-oauth/google'

function Hero() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Login Success:', tokenResponse);
      // Here you can handle the successful login
      // For example, store the token or redirect the user
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
    flow: 'implicit',
  });

  const handleTryDemo = () => {
    console.log('Demo clicked - initiating sign in...');
    login();
  };

  const handleGetStarted = () => {
    console.log('Get Started clicked - initiating sign in...');
    login();
  };

  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col items-center mt-24 text-center
    '
    >
      <h2 className='font-extrabold text-5xl flex flex-wrap gap-4 justify-center '>
        <LayoutTextFlip 
          text="AI-Powered" 
           words={["Email Templates", "Email Website","Email Design", "Email Reply"]}
          duration={3000}
        />
      </h2>
      <p className='text-center mt-4'>Longing to impress clients with AI-Powered emails but don't
       have enough time to build them on your own ? Use the AI-powered email templates that already have 
       AI-generated imagery and copy - save time on email production with us.
      </p>

      <div className='flex gap-5 mt-6'>
       <Button 
         className="bg-[#7f57f1] hover:ring-[#7f57f1]"
         onClick={handleTryDemo}
       >
         Try Demo
       </Button>
       <Button 
         className="bg-[#7f57f1] hover:ring-[#7f57f1]"
         onClick={handleGetStarted}
       >
         Get Started
       </Button>
      </div>

      <Image src={'/landing page.png'} alt='landing page'
      width={1000} height={800} className='mt-12 rounded-xl'/>

    </div>
  )
}

export default Hero
