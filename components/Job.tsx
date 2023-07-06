import React from 'react'
import type { Job } from '@/firebase/db/jobs'

const formatter = Intl.NumberFormat('en', { notation: 'compact' });

export default function Job({ title, description, workTime, location, id, company, salary }: any): React.JSX.Element {
  return (
    <div className='border-solid border-[1px] border-neutral-200 px-6 py-6 flex flex-col rounded-lg hover:border-neutral-300 hover:bg-neutral-50 transition-all cursor-pointer'>
      <h5 className='font-medium text-[18px]'>{title}</h5>
      <p className='text-neutral-600 text-[15px]'>{company.name}</p>
      <p className='flex items-center mt-1 text-neutral-700 text-[15px]'>
        <span className="material-symbols-outlined scale-[.7] text-blue-800">location_on</span>
        {location}
      </p>
      <div className='flex gap-2 mt-2 mb-5'>
        <span className='bg-neutral-100 px-2 py-[2px] flex gap-1 items-center rounded-md'>
          <span className="material-symbols-outlined">universal_currency_alt</span>
          {formatter.format(salary)}
        </span>
        <span className='bg-neutral-100 px-2 py-[2px]'>{workTime}</span>
      </div>
      <p className='mt-auto text-[15px] text-neutral-600'>{description.length > 85 ? `${description.slice(0, 85)}...` : description}</p>
    </div>
  )
}
