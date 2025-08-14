import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full mt-[100px] px-[50px]'>
        <div className='flex items-center justify-between border-b-2 border-y-gray-300 py-[30px]'>
            <div className='flex flex-col gap-2'>
               <h2 className='logo-font text-2xl'>Foodieland.</h2> 
               <p className='text-gray-400'>Your favorite place for delicious recipes.</p>
            </div>
            <div className='hidden md:flex items-center justify-between gap-6 list-none'>
                <Link to="/recipes" onClick={() => window.scrollTo(0, 0)}><li className='font-semibold hover:text-gray-600 cursor-pointer'>Recipes</li></Link>
                <Link to="/blogs" onClick={() => window.scrollTo(0, 0)}><li className='font-semibold hover:text-gray-600 cursor-pointer'>Blogs</li></Link>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}><li className='font-semibold hover:text-gray-600 cursor-pointer'>Contact</li></Link>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}><li className='font-semibold hover:text-gray-600 cursor-pointer'>About Us</li></Link>
            </div>
        </div>
        <p className='text-center text-gray-400 py-[30px]'>© 2025 Foodieland. All rights reserved.</p>
    </div>
  )
}

export default Footer