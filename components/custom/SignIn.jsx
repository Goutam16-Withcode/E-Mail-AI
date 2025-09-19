
import React from 'react'
import { Button } from '../ui/moving-border';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';

const SignIn = () => {
  

const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    console.log(tokenResponse);
    const userInfo = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      { headers: { Authorization: 'Bearer' + tokenResponse?.access_token} },
    );

    console.log(userInfo);
  },
  onError: errorResponse => console.log(errorResponse),
});
  return (
    <div>
      <Button onClick={googleLogin}>Get Started</Button>
    </div>
  )
}

export default SignIn
