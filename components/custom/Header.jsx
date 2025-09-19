"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/stateful-button'
import { useGoogleLogin } from '@react-oauth/google'

const Header = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Header Login Success:', tokenResponse);
      // Handle successful login - redirect to dashboard, store token, etc.
    },
    onError: (error) => {
      console.log('Header Login Failed:', error);
    },
    flow: 'implicit',
  });

  const handleSignIn = () => {
    console.log('Sign In clicked from header...');
    login();
  };

  return (
    <div className='flex justify-between items-center p-4 shadow-sm px-10'>
      <Image src={'/logo.svg'} width={180} height={140} alt="Logo"/>
      <div>
       <Button 
         className="bg-[#7f57f1] hover:ring-[#7f57f1]"
         onClick={handleSignIn}
       >
         Sign In
       </Button>
      </div>
    </div>
  )
}

export default Header
