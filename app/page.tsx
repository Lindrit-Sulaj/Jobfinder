import React from 'react'
import { Search } from '@/components'

async function getJobs() {
  const res = await fetch('http://localhost:3000/api/jobs', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) {
    throw new Error("Couldn't fetch")
  }
  const data = await res.json();
  return data;
}

export default async function Home() {
  // const jobs = await getJobs();

  return (
    <main className='px-6 md:px-8'>
      <Search />
      {/* <pre>{ JSON.stringify(jobs, null, 2)}</pre> */}
      <span>{new Date().getTime()}</span>
    </main> 
  )
}

export const revalidate = 900;