'use client'
import React, { useState, FormEvent } from 'react'
import { Button, Input } from '@mui/base';
import { useRouter } from 'next/navigation'
import { signIn } from '@/firebase/auth/signIn';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { result, error } = await signIn({ email, password });
    
    if (error) {
      return alert("Something went wrong");
    } else if (result) {
      return router.push('/')
    }
  }

  return (
    <form className='mt-6' onSubmit={(e) => handleSubmit(e)}>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} slotProps={{ input: { className: 'outline-none w-full' } }} className='px-4 py-2 border-solid border-[1px] border-neutral-200 bg-white my-[10px] rounded-sm' placeholder='Enter your email' />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} slotProps={{ input: { className: 'outline-none w-full' } }} className='px-4 py-2 border-solid border-[1px] border-neutral-200 bg-white my-[10px] rounded-sm' type='password' placeholder='Enter your password' />
      <Button type="submit" className='bg-customBlue-800 w-full text-white py-2 font-medium rounded-sm hover:bg-customBlue-700 transition-all'>Create account</Button>
      <Button type="button" className='py-2 flex justify-center items-center gap-4 font-medium rounded-sm my-[10px] border-solid border-[1px] border-neutral-200 w-full'>
        <img className='w-5 h-5' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="Google Logo" />
        <span className='text-center'>Sign in with Google</span>
      </Button>
    </form>
  )
}
