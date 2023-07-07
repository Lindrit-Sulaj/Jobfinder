'use client'
import React, { useState } from 'react';
import Link from 'next/link';

import useMediaQuery from '@/utils/useMediaQuery';
import { useAuth } from '@/app/AuthProvider';
import { SignIn, Search } from '@/components';
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
  const breakpoint = useMediaQuery();
  const user = useAuth();
  const [isOpened, setIsOpened] = useState(false);
  const [isSearching, setIsSearching] = useState<boolean>(false)

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
      {breakpoint === "sm" || breakpoint === "md" || breakpoint === "lg" ? (
        <nav className='h-[70px] fixed top-0 w-full z-50 bg-federal-blue text-white px-6 flex items-center justify-between'>
          <h2 className="font-bold text-[20px] flex items-center gap-1">
            <span className="material-symbols-outlined text-marian-blue">bolt</span>
            <span>jobfinder</span>
          </h2>
          <div className="flex gap-1">
            <button onClick={() => !user && setIsOpened(true)} className={`${user ? "w-10 h-10" : "px-3 py-1 w-auto"} transition-all flex items-center justify-center rounded-md hover:bg-federal-hover`}>
              { user ? <span className="material-symbols-outlined text-light-blue transition-all hover:text-white">account_circle</span> : "Log in"}
              
            </button>
            <button onClick={() => setIsSearching(!isSearching)} className='w-10 h-10 transition-all flex items-center justify-center rounded-md hover:bg-federal-hover'>
              <span className="material-symbols-outlined text-light-blue transition-all hover:text-white">search</span>
            </button>
            <button className='w-10 h-10 transition-all flex items-center justify-center rounded-md hover:bg-federal-hover'>
              <span className="material-symbols-outlined text-light-blue transition-all hover:text-white">menu</span>
            </button>
          </div>
        </nav>
      ) : (
        <nav className='h-[70px] z-50 fixed top-0 w-full flex items-center justify-between px-8 bg-federal-blue text-white'>
          <div className='flex items-center gap-6 grow'>
            <h2 className="font-bold text-[22px] flex items-center gap-1">
              <span className="material-symbols-outlined text-marian-blue">bolt</span>
              <span>jobfinder</span>
            </h2>
            <ul className='flex gap-2'>
              {links.map((link) => (
                <NavLink key={link.title} {...link} />
              ))}
            </ul>
            <Search />
          </div>
          {user ? (
            <div className='flex gap-2 items-center'>
              <Link href="/" title='View Profile' className='bg-mint-green text-federal-blue px-4 py-[6px] rounded-md font-medium transition-all'>
                {user.displayName !== null ? user.displayName : user.email}
              </Link>
              <button onClick={handleLogOut} title='Log out' className='rounded-full border-solid border-[2px] border-marian-blue w-10 h-10 flex items-center justify-center'>
                <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          ) : (
            <button onClick={() => setIsOpened(true)} className='bg-blue-500 px-4 py-2 text-white rounded-full'>
              Sign in
            </button>
          )}
        </nav>
      )}

      {isSearching && ['sm', 'md', 'lg'].includes(breakpoint) && (
        <div className='fixed top-[70px] w-full py-6 bg-federal-blue z-50 px-8'>
          <Search />
        </div>
      )}
      <SignIn isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}

function NavLink({ url, title }: { url: string; title: string }): React.JSX.Element {
  return (
    <li>
      <Link aria-label={title} href={url} className='px-3 py-2 rounded-md transition-all hover:bg-federal-hover'>
        {title}
      </Link>
    </li>
  )
}