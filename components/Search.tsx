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
    <form className='flex flex-col gap-y-3 xl:flex-row grow text-white xl:text-black' onSubmit={handleSubmit}>
      <div className='w-full xl:bg-white xl:max-w-[300px] px-3 py-2 flex items-center gap-2 border-solid border-[1px] border-marian-blue xl:border-neutral-100 rounded-md xl:rounded-l-md xl:rounded-r-none'>
        <input value={query} onChange={(e) => setQuery(e.target.value)} className='grow placeholder:text-light-blue xl:placeholder:text-neutral-400 bg-transparent outline-none w-full' type="text" placeholder='Job title, keywords, or company' />
      </div>
      <div className='w-full xl:bg-white xl:max-w-[250px] px-3 py-2 flex items-center gap-2 border-solid border-[1px] border-marian-blue xl:border-neutral-100 rounded-md xl:rounded-none'>
        <input value={location} onChange={(e) => setLocation(e.target.value)} className='grow placeholder:text-light-blue xl:placeholder:text-neutral-400 bg-transparent outline-none w-full' type="text" placeholder={`Country, state or "remote"`}/>
      </div>
      <button className='bg-mint-green xl:text-white xl:bg-marian-blue hover:bg-light-blue xl:hover:bg-federal-hover transition-all text-federal-blue flex items-center justify-center xl:w-12 rounded-md xl:rounded-r-md xl:rounded-l-none py-2 xl:py-0'>
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  )
}
