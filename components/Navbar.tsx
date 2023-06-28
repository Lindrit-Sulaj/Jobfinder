'use client'
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/AuthProvider';
import { Button } from '@mui/base';
import { logOut } from '@/firebase/auth/signIn';

export default function Navbar() {
  const user = useAuth();

  return (
    <nav className='bg-customBlue-900 px-6 md:px-8 text-white'>
      <div className='max-w-screen-xl h-[70px] mx-auto flex items-center justify-between'>
        <h2 className='font-bold text-[22px]'>jobsinkosovo</h2>

        {!user ? (
          <Link href="/signin" className='bg-white text-customBlue-800 px-4 py-2 rounded-full font-medium'>Sign in</Link>
        ) : (
          <ul className='flex gap-4'>
            <li>
              <Button aria-label='Bookmarks' title='Bookmarks'>
                <span className="material-symbols-outlined">bookmark</span>
              </Button>
            </li>
            <li>
              <Button aria-label='Messages' title='Messages'>
                <span className="material-symbols-outlined">chat</span>
              </Button>
            </li>
            <li>
              <Link href="/" title='Profile'>
                <span className="material-symbols-outlined">person</span>
              </Link>
            </li>
            <li>
              <Button aria-label='Log out' title='Log out' onClick={logOut}>
                <span className="material-symbols-outlined">logout</span>
              </Button>
            </li>
          </ul>
        )}

      </div>
    </nav>
  )
}
