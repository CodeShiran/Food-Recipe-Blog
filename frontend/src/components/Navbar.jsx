import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[50px] py-[30px] border-b-1 border-gray-300'>
        <div>
            <h2 className='logo-font text-2xl'>Foodieland.</h2>
        </div>
        <div className='flex items-center gap-9 list-none'>
            <li className='relative cursor-pointer group'>
                <span className='relative'>
                    Home
                    <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </span>
            </li>
            <li className='relative cursor-pointer group'>
                <span className='relative'>
                    Recipes
                    <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </span>
            </li>
            <li className='relative cursor-pointer group'>
                <span className='relative'>
                    Blog
                    <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </span>
            </li>
            <li className='relative cursor-pointer group'>
                <span className='relative'>
                    Contact
                    <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </span>
            </li>
            <li className='relative cursor-pointer group'>
                <span className='relative'>
                    About Us
                    <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </span>
            </li>
        </div>
        <div className='flex items-center gap-6'>
            <FaFacebookF className='text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer' />
            <FaTwitter className='text-sky-500 hover:text-sky-600 transition-colors duration-200 cursor-pointer' />
            <FaInstagram className='text-pink-600 hover:text-pink-700 transition-colors duration-200 cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar