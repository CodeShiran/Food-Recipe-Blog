import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleMenuToggle = () => {
        setMenu(!menu);
    }
  return (
    <div className='flex items-center justify-between px-[50px] py-[30px] border-b-1 border-gray-300'>
        <div>
            <h2 className='logo-font text-2xl'>Foodieland.</h2>
        </div>
        <div className='flex items-center gap-9 list-none max-md:hidden'>
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
        <div className='flex items-center gap-6 max-md:hidden'>
            <FaFacebookF className='text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer' />
            <FaTwitter className='text-sky-500 hover:text-sky-600 transition-colors duration-200 cursor-pointer' />
            <FaInstagram className='text-pink-600 hover:text-pink-700 transition-colors duration-200 cursor-pointer' />
        </div>
        <div className='absolute mx-[50px] my-[30px] top-0 right-0 sm:hidden flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-200'>
            <IoMdMenu onClick={handleMenuToggle} />
        </div>

        {/* Mobile Menu (optional) */}
        <div className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${menu ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${menu ? 'opacity-100' : 'opacity-0'}`} onClick={handleMenuToggle}></div>
            <ul className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-screen bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-14 transition-all duration-500 ease-out ${menu ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'}`}>
                <li className='cursor-pointer hover:text-blue-500 mt-14'>Home</li>
                <li className='cursor-pointer hover:text-blue-500'>Recipes</li>
                <li className='cursor-pointer hover:text-blue-500'>Blog</li>
                <li className='cursor-pointer hover:text-blue-500'>Contact</li>
                <li className='cursor-pointer hover:text-blue-500'>About Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar