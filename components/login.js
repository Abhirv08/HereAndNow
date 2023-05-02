import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Formik, Form } from 'formik'
import { MyTextInput } from './myTextInput'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Login({isModalOpen = false, setIsModalOpen}) {

    const handleLogin = (values) => {
        console.log(values)
    }

    const handleClose = () =>  {
        setIsModalOpen(false)
    }

    return (
        <div 
        className={`sm:w-[464px] sm:h-[436px] mx-2 sm:mx-auto rounded-lg bg-gradient-to-br from-[#969696] to-[#343434] flex items-center justify-center ${inter.className}`}>
            <div className="rounded-lg relative bg-[#27292D] sm:w-[460px] sm:h-[432px] px-6 py-10 " >
            {isModalOpen && <div className="absolute top-4 right-4 bg-[#131319] p-1 rounded-full cursor-pointer" onClick={handleClose}>
                <svg fill="white" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.414 5A1 1 0 1 0 5 6.414L10.586 12 5 17.586A1 1 0 1 0 6.414 19L12 13.414 17.586 19A1 1 0 1 0 19 17.586L13.414 12 19 6.414A1 1 0 1 0 17.586 5L12 10.586 6.414 5Z"></path></svg>
            </div>}
            <div className='flex items-center flex-col '>
                <div className='text-[#6B6C70] text-sm'>Welcome Back</div>
                <div className='text-[#FFFFFF] mt-2 text-lg'>Log into your account</div>

                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={handleLogin}
                >
                    {({ values, error }) => {
                        return (
                            <Form className='w-full mt-10'>
                                <MyTextInput label="Email or Username" name="email" type="text" placeholder="Enter Your Username or Email" />
                                <MyTextInput label="Password" name="password" type="password" placeholder="Enter Your Password"
                                    showForget={true} isPassword={true} />

                                <button type="submit"
                                    className="shadow-sm mt-2 w-full rounded-md bg-[#4A96FF] py-1.5 text-white text-md">Login Now</button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
            <div className='text-[#6B6C70] mt-3 text-left text-sm'>Not Registered yet?
                <span className='text-[#FFFFFF]'>{' '}<Link href="/signup">Register {'->'}</Link> </span>
            </div>
            </div>
        </div>
    )
}
