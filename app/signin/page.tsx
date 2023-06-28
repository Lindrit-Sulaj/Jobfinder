import React from 'react'
import { SignIn } from '@/components'

export default function SignInPage() {
  return (
    <main className='min-h-[calc(100vh-71px)] flex justify-center items-center'>
      <div className='bg-neutral-50 p-10 border-solid border-[1px] border-neutral-200 rounded-lg'>
        <h1 className='font-bold text-center text-[22px]'>Ready to take the next step?</h1>
        <p className='text-neutral-600'>Create an account or log in.</p>
        <SignIn />
      </div>
    </main>
  )
}
