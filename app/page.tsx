import React from 'react'
import { Search } from '@/components'

async function getJobs() {
  const res = await fetch('http://localhost:3000/api/jobs', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Couldn't fetch")
  }
  return res.json();
}

export default async function Home() {
  const jobs = await getJobs();

  return (
    <main className='px-6 md:px-8'>
      <Search />
      <pre>{ JSON.stringify(jobs, null, 2)}</pre>
      <span>{new Date().getTime()}</span>
    </main> 
  )
}

// export const revalidate = 3600;