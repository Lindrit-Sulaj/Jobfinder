'use client'
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/AuthProvider';

const links: { url: string, title: string }[] = [
  {
    url: '/saved',
    title: 'Bookmarks',
  },
  {
    url: '/jobs',
    title: 'Jobs',
  },
  {
    url: '/companies',
    title: 'Companies',
  },
]

export default function Navbar() {
  const { user, account } = useAuth();

  return (
    <nav className='h-[69px] flex items-center justify-between px-8 border-solid border-b-[1px] border-b-neutral-200'>
      <div className='flex items-center gap-6'>
        <h2 className="font-bold text-[22px] flex items-center gap-1">
          <span className="material-symbols-outlined text-orange-600">bolt</span>
          <span className='text-neutral-800'>jobfinder</span>
        </h2>
        <ul className='flex gap-6'>
          {links.map((link) => (
            <NavLink key={link.title} {...link} />
          ))}
        </ul>
      </div>
      <div className='flex gap-2 items-center'>
        <Link href="/" title='View Profile' className='border-solid border-[1px] border-orange-500 bg-orange-500 text-white px-4 py-[6px] rounded-full font-medium transition-all hover:bg-white hover:text-orange-500'>
          Lindrit Sulaj
        </Link>
        <button title='Log out' className='rounded-full border-solid border-[1px] border-neutral-300 w-10 h-10 flex items-center justify-center'>
          <span className="material-symbols-outlined">logout</span>
        </button>
      </div>
    </nav>
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