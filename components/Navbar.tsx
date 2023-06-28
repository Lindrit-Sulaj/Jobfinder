'use client'
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/AuthProvider';

export default function Navbar() {
  const user = useAuth();

  return (
    <nav className='bg-customBlue-900 px-6 md:px-8 text-white'>
      <div className='max-w-screen-xl h-[70px] mx-auto flex items-center justify-between'>
        <h2 className='font-bold text-[22px]'>jobsinkosovo</h2>

        {!user ? (
          <Link href="/signin" className='bg-white text-customBlue-800 px-4 py-2 rounded-full font-medium'>Sign in</Link>
        ) : (
          <ul>
            <li>{JSON.stringify(user)}</li>
          </ul>
        )}

      </div>
    </nav>
  )
}
