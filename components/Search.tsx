'use client'
import React, { FormEvent, useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query === "" && location === "") {
      alert("Enter atleast a keyword or a location");
      return;
    }

    let route: string = '/search?'
    
    const params: { q: string; location: string } = {
      q: query,
      location
    }

    for (let key in params) {
      if (params[key as keyof { q: string; location: string } ] === "") { continue };
      
      route += `${key}=${params[key as keyof { q: string; location: string } ]}&`
    };

    if (route[route.length - 1] === "&") {
      route = route.slice(0, route.length - 1)
    }

    router.push(route)
  }

  return (
    <form className='max-w-screen-xl mx-auto mt-8 flex gap-4' onSubmit={handleSubmit}>
      <div className='w-1/2 bg-neutral-50 border-solid border-[1px] border-neutral-200 rounded-full py-4 px-3 flex'>
        <span className='w-20 text-center'>What</span>
        <input value={query} onChange={(e) => setQuery(e.target.value)} className='grow bg-transparent outline-none' type="text" placeholder='Job title, keywords, or company' />
      </div>
      <div className='w-1/2 bg-neutral-50 border-solid border-[1px] border-neutral-200 rounded-full py-4 px-3 flex'>
        <span className='w-20 text-center'>Where</span>
        <input value={location} onChange={(e) => setLocation(e.target.value)} className='grow bg-transparent outline-none' type="text" placeholder={`Country, state or "remote"`}/>
      </div>
      <button className='bg-black text-white py-4 flex items-center justify-center w-10'>
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  )
}
