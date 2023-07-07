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
    <form className='flex grow text-black' onSubmit={handleSubmit}>
      <div className='w-full bg-white max-w-[300px] px-3 py-2 flex items-center gap-2 border-solid border-[1px] border-neutral-100 rounded-l-md'>
        <input value={query} onChange={(e) => setQuery(e.target.value)} className='grow bg-transparent outline-none w-full' type="text" placeholder='Job title, keywords, or company' />
      </div>
      <div className='w-full bg-white max-w-[250px] px-3 py-2 flex items-center gap-2 border-solid border-[1px] border-neutral-100'>
        <input value={location} onChange={(e) => setLocation(e.target.value)} className='grow bg-transparent outline-none w-full' type="text" placeholder={`Country, state or "remote"`}/>
      </div>
      <button className='bg-marian-blue hover:bg-federal-hover transition-all text-white flex items-center justify-center w-12 rounded-r-md'>
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  )
}
