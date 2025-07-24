import React from 'react'
import assets from '../assets/assets'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
  return (
    <div className='relative h-screen w-full flex items-center md:flex-row flex-col md:justify-between justify-center px-[50px]'>
            <div className='absolute inset-0 bg-black/50 z-10'>
                <img src={assets.loginBg} className='object-cover w-full h-full' alt="" />
            </div>
            <div className='relative z-20 max-w-[800px] w-full max-md:text-center'>
                <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6'>
                    Welcome <br /> Back to <br /> Foodieland!
                </h1>
            </div>
            <div className='relative z-20 max-w-[800px] w-full backdrop-blur-md  px-8 py-[50px] md:py-[100px] rounded-lg shadow-lg flex flex-col gap-6'>
                <h1 className='text-2xl sm:text-4xl md:text-4xl font-bold text-white mb-6'>Create An Account</h1>
                <div className='flex flex-row items-center justify-between gap-6'>
                    <input type="text" placeholder='first name' className='border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
                    <input type="text" placeholder='last name' className='border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
                </div>
                <div>
                    <input type="text" placeholder='email' className='border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
                </div>
                <div>
                    <input type="text" placeholder='password' className='border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
                </div>
                <div>
                    <input type="text" placeholder='confirm password' className='border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none' />
                </div>
                <div className='flex items-center justify-end mt-[10px]'>
                    <button className='bg-[#F2F2F2] text-[#828282] py-2 px-8 rounded-2xl hover:bg-[#828282] hover:text-[#F2F2F2] transition-all duration-300 cursor-pointer'>Sign Up</button>
                </div>
                <div className='flex items-center justify-start mt-[25px]'>
                    <p className='text-white'>Already have an account?</p>
                    <p onClick={() => navigate('/login')} className='text-white cursor-pointer underline hover:text-[blue] transition-all duration-150'>login</p>
                </div>

                </div>
        </div>
  )
}

export default Signup