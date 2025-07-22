import React from 'react'
import assets from '../assets/assets'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <div className='relative h-screen w-full flex items-center justify-between px-[50px]'>
        <div className='absolute inset-0 bg-black/50 z-10'>
            <img src={assets.loginBg} className='object-cover w-full h-full' alt="" />
        </div>
        <div className='relative z-20'>
            <h1 className='text-4xl font-bold text-white mb-6'>
                Welcome Back to <br /> Foodieland!
            </h1>
        </div>
        <div className='relative z-20 max-w-[500px] w-full backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col gap-6'>
            <div className='flex items-center justify-between px-2 py-3 bg-gray-200 rounded'>
                <MdOutlineEmail />
                <input type="email" placeholder="Email" className='bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
            </div>
            <div className='flex items-center justify-between'>
                <RiLockPasswordLine />
                <input type="password" placeholder="Password" className='bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
            </div>
            <div><button className=' bg-blue-500 text-white py-2 px-4 rounded'>Login</button></div>
        </div>
    </div>
  )
}

export default Login