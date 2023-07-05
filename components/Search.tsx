'use client'
import React from 'react'

export default function Search() {
  return (
    <form className='max-w-screen-xl mx-auto mt-8 flex gap-4'>
      <div className='w-1/2 bg-neutral-50 border-solid border-[1px] border-neutral-200 rounded-md py-4 px-3 flex'>
        <span className='w-20 text-center'>What</span>
        <input className='grow bg-transparent outline-none' type="text" placeholder='Job title, keywords, or company' />
      </div>
      <div className='w-1/2 bg-neutral-50 border-solid border-[1px] border-neutral-200 rounded-md py-4 px-3 flex'>
        <span className='w-20 text-center'>Where</span>
        <input className='grow bg-transparent outline-none' type="text" placeholder={`Country, state or "remote"`}/>
      </div>
    </form>
  )
}
