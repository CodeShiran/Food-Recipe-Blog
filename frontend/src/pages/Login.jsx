import React from 'react'
import assets from '../assets/assets'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='relative h-screen w-full flex items-center md:flex-row flex-col md:justify-between justify-center px-[50px]'>
        <div className='absolute inset-0 bg-black/50 z-10'>
            <img src={assets.loginBg} className='object-cover w-full h-full' alt="" />
        </div>
        <div className='relative z-20 max-w-[800px] w-full max-md:text-center'>
            <h1 className='text-2xl sm:text-4xl md:text-7xl font-bold text-white mb-6'>
                Welcome <br /> Back to <br /> Foodieland!
            </h1>
        </div>
        <div className='relative z-20 max-w-[800px] w-full backdrop-blur-md  px-8 py-[50px] md:py-[100px] rounded-lg shadow-lg flex flex-col gap-6'>
            <div className='flex md:flex-row flex-col items-start  md:items-center justify-between rounded'>
                <MdOutlineEmail className='flex-1/4 text-white text-2xl' />
                <input type="email" placeholder="Email" className='w-full flex-3/4 bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
            </div>
            <div className='flex md:flex-row flex-col items-start md:items-center justify-between'>
                <RiLockPasswordLine className='md:flex-1/4 text-white text-2xl' />
                <input type="password" placeholder="Password" className='w-full md:flex-3/4 bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
            </div>
            <div className='flex items-center justify-center md:justify-end mt-[25px]'>
                <button className=' bg-[#F2F2F2] text-[#828282] py-2 px-8 rounded-2xl hover:bg-[#828282] hover:text-[#F2F2F2] transition-all duration-300 cursor-pointer'>Login</button>
            </div>
            <div className='flex items-center justify-center md:justify-start mt-[25px] md:ml-[75px]'>
                <p className='text-[#828282]'>Forgot your password?</p>
                <button className='text-[#F2F2F2] underline ml-2 hover:text-[#828282]'>Reset it</button>
            </div>
            <div className='flex items-center justify-center md:justify-start md:ml-[75px]'>
                <p className='text-[#828282]'>Don't have an account?</p>
                <button onClick={() => navigate('/signup')} className='text-[#F2F2F2] underline ml-2 hover:text-[#828282]'>Register</button>
            </div>

        </div>
    </div>
  )
}

export default Login