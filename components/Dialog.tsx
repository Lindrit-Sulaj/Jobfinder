"use client"
import React, { SetStateAction } from 'react'
import { FocusTrap } from '@mui/base';
import { motion, AnimatePresence } from 'framer-motion';

interface Dialog {
  children: React.ReactNode;
  isOpened: boolean;
  setIsOpened: React.Dispatch<SetStateAction<boolean>>
}

export function Backdrop({ children, isOpened, setIsOpened }: Dialog) {
  return (
    <div onClick={() => isOpened && setIsOpened(false)} className={isOpened ? 'bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 w-full h-screen flex justify-center items-center' : ''}>
      {children}
    </div>
  )
}

export default function Dialog({ children, isOpened, setIsOpened }: Dialog) {
  return (
    <AnimatePresence>
      <Backdrop isOpened={isOpened} setIsOpened={setIsOpened}>
        {isOpened && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .4 }}
            className='bg-white p-6 rounded-md'>
            {children}
          </motion.div>
        )}
      </Backdrop>
    </AnimatePresence>
  )
}
