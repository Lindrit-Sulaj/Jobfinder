'use client'
import React, { FormEvent, useState } from 'react';
import Dialog from './Dialog';
import { signIn, logIn, signInWithGoogle } from '@/firebase/auth/signIn';

function useInput<T>(value: T) {
  const [inputValue, setInputValue] = useState<T>(value);

  function onChange(e: any) {
    setInputValue(e.target.value)
  }

  return { value: inputValue, onChange }
}

export default function SignIn({ isOpened, setIsOpened }: { isOpened: boolean, setIsOpened: React.Dispatch<React.SetStateAction<boolean>> }) {
  const email = useInput<string>('');
  const password = useInput<string>('');
  const [action, setAction] = useState<'signIn' | 'logIn'>('signIn')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let result, error;

    if (action === "signIn") {
      let response = await signIn({ email: email.value, password: password.value });
      result = response.result;
      error = response.error;
    } else if (action === "logIn") {
      let response = await logIn({ email: email.value, password: password.value });
      result = response.result;
      error = response.error;
    };

    if (error) {
      console.log(error);
    } else {
      email.onChange({ target: { value: '' }})
      password.onChange({ target: { value: '' }})

      setIsOpened(false);
    }
  }

  async function handleGoogleLogin() {
    const { result, error } = await signInWithGoogle();

    if (error) {
      console.log(error);
    } else {
      email.onChange({ target: { value: '' }})
      password.onChange({ target: { value: '' }});

      setIsOpened(false);
      console.log(result);
    }
  }

  return (
    <Dialog isOpened={isOpened} setIsOpened={setIsOpened} >
      <h2 className='font-bold text-2xl text-blue-500'>
        {action === "signIn" ? "Sign In" : "Log in"}
      </h2>
      <button className='text-[15px] text-neutral-700 mb-3' onClick={() => setAction(action === 'logIn' ? 'signIn' : 'logIn')}>
        {action === "signIn" ? 'Already have an account? Log in' : "Don't have an account? Sign in" }
      </button>
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
          <label className='text-[15px] text-neutral-600' htmlFor="email">Email: </label>
          <input className='block outline-blue-500 py-2 px-3 border-solid border-[1px] border-neutral-200 w-[300px] max-w-full mt-1' aria-label='Email' type="text" {...email} id="email" />
        </div>
        <div className='my-4'>
          <label className='text-[15px] text-neutral-600' htmlFor="password">Password</label>
          <input className='block outline-blue-500 py-2 px-3 border-solid border-[1px] border-neutral-200 w-[300px] max-w-full mt-1' aria-label="Password" type="text" {...password} id="password" />
        </div>
        <button className='bg-blue-500 hover:bg-blue-600 transition-all text-white py-3 w-full rounded-md'>
          {action === "signIn" ? 'Create account' : 'Log in' }
        </button>
      </form>
      <button className='border-solid border-[1px] border-neutral-200 w-full py-2 my-3 rounded-md' onClick={handleGoogleLogin}>Sign in with Google</button>
    </Dialog>
  )
}
