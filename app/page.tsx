import React from 'react'
import { Search } from '@/components'
import { getJobs } from '@/firebase/db/jobs';

export default async function Home() {
  const jobs = await getJobs({});

  return (
    <main className='px-6 md:px-8'>
      <Search />
      <pre>{JSON.stringify(jobs, null, 2)}</pre>
      <span>{new Date().getTime()}</span>
    </main> 
  )
}

export const revalidate = 900;