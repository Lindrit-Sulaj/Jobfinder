import React from 'react'
import { Search, Job } from '@/components'
import { getJobs } from '@/firebase/db/jobs';

export default async function Home() {
  const jobs = await getJobs();

  return (
    <main className='px-6 md:px-8'>
      <Search />
      <section className='grid grid-cols-3 max-w-screen-xl mx-auto gap-6 mt-8'>
        {jobs.map(job => (
          <Job {...job} key={job.id}/>
        ))}
      </section>
      <span>{new Date().getTime()}</span>
    </main> 
  )
}