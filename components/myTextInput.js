
import { Field, useField } from 'formik'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-4">
            <div className='flex justify-between items-center text-sm font-medium text-[#C5C7CA]'>
                <label htmlFor={props.name} className="block ">{label}</label>
                {props.showForget && <Link href="/changePassword">Forget Password?</Link>}
            </div>

            <div className="shadow-sm mt-2.5 flex h-10 rounded-md bg-[#27292D] ring-2 ring-inset ring-gray-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#4A96FF] pr-2.5">
                <Field
                    className="block h-full flex-1 border-0 bg-transparent py-1.5 pl-2 text-white placeholder:text-[#7F8084] focus:ring-0 sm:text-sm sm:leading-6 focus:outline-0 text-base"
                    {...props}
                    {...field}
                    type={showPassword ? `text` : `${props.type}`}
                />
                {props.isPassword && <Image src={`/images/${showPassword ? "closed-eye" : "open-eye"}.png`} height={20} width={20} alt="viewer"
                    style={{ height: '20px', marginTop: '10px', cursor: 'pointer' }} onClick={togglePasswordVisibility} />}
            </div>
            {meta.touched && meta.error ? <div className="error text-red-700">{meta.error}</div> : null}
        </div>
    );
};