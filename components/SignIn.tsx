'use client'
import React, { useState, FormEvent, useEffect } from 'react'
import { Button, Input } from '@mui/base';
import { useRouter } from 'next/navigation'
import { signIn, signInWithGoogle, logOut } from '@/firebase/auth/signIn';
import { useAuth } from '@/app/AuthProvider';

export default function SignIn({ setStep }: { setStep: any }) {
  const {user, account} = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { result, error } = await signIn({ email, password });

    if (error) {
      return alert("Something went wrong: " + error);
    } else {
      return setStep(1)
    }
  }

  async function handleSignOut() {
    const { result, error } = await logOut();

    if (error) {
      return alert("Something went wrong: " + error);
    }
  }

  async function handleGoogleLogin() {
    const { result, error } = await signInWithGoogle();

    if (error) {
      return alert("Something went wrong: " + error);
    } else {
      return setStep(1)
    }
  }
  
  useEffect(() => {
    if (user) {
      setStep(1);
    }
  }, [])

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1 className='font-bold text-2xl text-white mb-6'>Create an account</h1>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} slotProps={{ input: { className: 'bg-transparent outline-none w-full text-white' } }} className='px-4 py-2 border-solid border-[1px] border-neutral-700 my-[10px] rounded-md' placeholder='Enter your email' />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} slotProps={{ input: { className: 'bg-transparent outline-none w-full text-white' } }} className='px-4 py-2 border-solid border-[1px] border-neutral-700 my-[10px] rounded-md' type='password' placeholder='Enter your password' />
      <Button type="submit" className='bg-orange-400 w-full py-2 font-medium rounded-md hover:bg-customBlue-700 transition-all'>Create account</Button>
      <Button type="button" onClick={handleGoogleLogin} className='py-2 flex justify-center items-center gap-4 font-medium rounded-md my-[10px] border-solid border-[1px] border-neutral-700 w-full text-white'>
        <img className='w-5 h-5' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="Google Logo" />
        <span className='text-center'>Sign in with Google</span>
      </Button>
    </form>
  )
}
