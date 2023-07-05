'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/AuthProvider';
import SignIn from './SignIn';
import { logOut } from '@/firebase/auth/signIn';

const links: { url: string, title: string }[] = [
  {
    url: '/saves',
    title: 'Bookmarks',
  },
  {
    url: '/companies',
    title: 'Companies',
  },
]

export default function Navbar() {
  const user = useAuth();
  const [isOpened, setIsOpened] = useState(false);

  async function handleLogOut() {
    const { result, error } = await logOut();

    if (error) {
      console.log(error);
    } else {
      console.log(result)
    }
  }

  return (
    <>
      <nav className='h-[69px] flex items-center justify-between px-8 border-solid border-b-[1px] border-b-neutral-200'>
        <div className='flex items-center gap-6'>
          <h2 className="font-bold text-[22px] flex items-center gap-1">
            <span className="material-symbols-outlined text-blue-500">bolt</span>
            <span className='text-neutral-800'>jobfinder</span>
          </h2>
          <ul className='flex gap-6'>
            {links.map((link) => (
              <NavLink key={link.title} {...link} />
            ))}
          </ul>
        </div>
        {user ? (
          <div className='flex gap-2 items-center'>
            <Link href="/" title='View Profile' className='border-solid border-[1px] border-blue-500 bg-blue-500 text-white px-4 py-[6px] rounded-full font-medium transition-all hover:bg-white hover:text-blue-500'>
              {user.displayName !== null ? user.displayName : user.email}
            </Link>
            <button onClick={handleLogOut} title='Log out' className='rounded-full border-solid border-[1px] border-neutral-300 w-10 h-10 flex items-center justify-center'>
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        ) : (
          <button onClick={() => setIsOpened(true)} className='bg-blue-500 px-4 py-2 text-white rounded-full'>
            Sign in
          </button>
        )}
      </nav>

      <SignIn isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}

function NavLink({ url, title }: { url: string; title: string }): React.JSX.Element {
  return (
    <li>
      <Link aria-label={title} href={url} className='text-[15.5px]'>
        {title}
      </Link>
    </li>
  )
}