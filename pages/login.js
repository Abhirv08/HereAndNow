
import Image from 'next/image'
import React from 'react'
import Login from '@/components/login';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function LoginPage() {
  return (
    <div className={`sm:w-[463px] sm:h-[460px] mx-2 sm:mx-auto mt-14 ${inter.className}`}>
        <div className='flex  justify-center mb-12'>
            <Image src="/images/shape.png" width={32} height={32} alt="shape" />
        </div>
        <Login />
    </div>
  )
}
