"use client";

import React, { useEffect, useState } from 'react'
import SignIn from './SignIn';
import { Button, Input } from '@mui/base';

export default function CreateAccount() {
  const [step, setStep] = useState<number>(Number(localStorage.getItem('signInStep')) || 0);
  const [accountType, setAccountType] = useState<'employer' | 'employee' | ''>('')

  useEffect(() => {
    localStorage.setItem('signInStep', String(step))
  }, [step])

  return (
    <div className='bg-neutral-850 w-full max-w-lg py-10 px-6 rounded-lg'>
      {step === 0 && <SignIn setStep={setStep} />}
      {step === 1 && <AccountType accountType={accountType} setAccountType={setAccountType} setStep={setStep} />}
      {step === 2 && <AccountDetails />}

      <div className='flex justify-between mt-6'>
        <div className={`${step >= 1 ? 'text-green-400' : (step === 0) ? 'text-orange-400' : 'text-neutral-400'}`}>
          <p>Sign in</p>
        </div>
        <div className={`${step >= 2 ? 'text-green-400' : (step === 1) ? 'text-orange-400' : 'text-neutral-400'}`}>
          <p>Employer or employee</p>
        </div>
        <div className={`${step >= 3 ? 'text-green-400' : (step === 2) ? 'text-orange-400' : 'text-neutral-400'}`}>
          <p>Account Details</p>
        </div>
      </div>
    </div>
  )
}

function AccountType({ accountType, setStep, setAccountType }: { setStep: any, setAccountType: any, accountType: 'employer' | 'employee' | '' }) {

  return (
    <div>
      <h1 className='font-bold text-2xl text-white mb-6'>What describes you?</h1>
      <Button onClick={() => setAccountType('employer')} className={`block w-full text-left text-neutral-400 border-solid border-[1px] border-neutral-700 my-2 hover:bg-neutral-800 transition-all px-6 py-[10px] rounded-md ${accountType === "employer" && 'bg-neutral-700 hover:bg-neutral-700'}`}><strong className='text-white'>Employer</strong> - looking to hire someone</Button>
      <Button onClick={() => setAccountType('employee')} className={`block w-full text-left text-neutral-400 border-solid border-[1px] border-neutral-700 my-2 hover:bg-neutral-800 transition-all px-6 py-[10px] rounded-md ${accountType === "employee" && 'bg-neutral-700 hover:bg-neutral-700'}`}><strong className='text-white'>Employee</strong> - looking for a job</Button>
      <Button onClick={() => setStep(2)} className='px-6 py-[10px] bg-orange-400 text-black w-full block rounded-md font-medium'>Continue</Button>
    </div>
  )
}

function AccountDetails() {
  const [profession, setProfession] = useState<string>('');
  const [experience, setExperience] = useState<number>()

  return (
    <div>
      <h1 className='font-bold text-2xl text-white mb-6'>Plotesoni informacionet qe te vazhdoni</h1>
      <form>
        <div className='my-4'>
          <label className='mb-2 block text-neutral-300 font-medium' htmlFor="profession">Profesioni</label>
          <Input value={profession} id='profession' onChange={(e) => setProfession(e.target.value)} slotProps={{ input: { className: 'bg-transparent outline-none w-full text-white' } }} className='px-4 py-2 border-solid border-[1px] border-neutral-700 rounded-md' type='text' placeholder='Profesioni juaj sh.Dizajner' />
        </div>
        <div className='my-4'>
          <label className='mb-2 block text-neutral-300 font-medium' htmlFor="experience">Experienca</label>
          <Input value={experience} id="experience" onChange={(e) => setExperience(Number(e.target.value))} slotProps={{ input: { className: 'bg-transparent outline-none w-full text-white' } }} className='px-4 py-2 border-solid border-[1px] border-neutral-700 rounded-md' type='number' placeholder='Eksperienca juaj (vite)' />
        </div>
        <div className='my-4'>
          <label className='mb-2 block text-neutral-300 font-medium' htmlFor="experience">Qyteti</label>
          <Input value={experience} id="experience" onChange={(e) => setExperience(Number(e.target.value))} slotProps={{ input: { className: 'bg-transparent outline-none w-full text-white' } }} className='px-4 py-2 border-solid border-[1px] border-neutral-700 rounded-md' type='number' placeholder='Qyteti ku banoni' />
        </div>
        <div className='my-4'>
          <label className='mb-2 block text-neutral-300 font-medium' htmlFor="experience">Edukimi</label>
          <Input value={experience} id="experience" onChange={(e) => setExperience(Number(e.target.value))} slotProps={{ input: { className: 'bg-transparent outline-none w-full text-white' } }} className='px-4 py-2 border-solid border-[1px] border-neutral-700 rounded-md' type='number' placeholder='Shkollimi (edukimi) juaj' />
        </div>
        <div className='my-4'>
          <label className='mb-2 block text-neutral-300 font-medium' htmlFor="experience">Biografia</label>
          <textarea value={experience} id="experience" cols={30} rows={5} onChange={(e) => setExperience(Number(e.target.value))} className='bg-transparent outline-none w-full px-4 py-2 border-solid border-[1px] border-neutral-700 rounded-md' placeholder='Nje biografi per ju'></textarea>
        </div>
        <Button className='bg-orange-400 w-full block py-3 rounded-md font-medium text-[17px]'>Krijo account</Button>
      </form>
    </div>
  )
}