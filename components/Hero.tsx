'use client'
import React, { useState } from 'react'
import { Input, Button } from '@mui/base'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="Hero bg-customBlue-900 pt-6 pb-14 text-white px-6 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className='font-bold text-center text-2xl lg:text-3xl'>Find your dream job in Kosovo</h1>
        <p className='max-w-md text-center mx-auto mt-2 text-blue-200'>Discover endless career opportunities in Kosovo ranging from construction to technology</p>
        <Search />
      </div>
    </section>
  )
}

function Search() {
  return (
    <div className='flex justify-center gap-3 mt-6 flex-col md:flex-row'>
      <div className='flex bg-customBlue-800 gap-3 items-center rounded-lg py-3 px-4'>
        <span className="material-symbols-outlined">search</span>
        <Input slotProps={{ input: { className: "bg-transparent outline-none placeholder:text-blue-300 placeholder:opacity-70"} }} placeholder='Enter job or keywords' />
      </div>
      <div className='flex bg-customBlue-800 gap-3 items-center rounded-lg py-3 px-4'>
        <span className="material-symbols-outlined">location_on</span>
        <Input slotProps={{ input: { className: "bg-transparent outline-none placeholder:text-blue-300 placeholder:opacity-70"} }} placeholder='Enter city' />
      </div>
      <Button className='bg-customBlue-500 px-5 py-3 md:py-0 rounded-lg hover:bg-customBlue-400 transition-all'>Search</Button>
    </div>
  )
}