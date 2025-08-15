import React from 'react'
import assets from '../assets/assets'

const BeChef = () => {
  return (
    <div className='flex items-center flex-col md:flex-row w-[90%] mx-auto md:mt-[100px] mt-[50px]'>
      <div className='flex-1 md:block hidden'>
        <h2 className='text-5xl font-bold'>Everyone can be a <br />chef in their own kitchen</h2>
        <p className='text-gray-400 mt-[50px]'>Discover the joy of cooking with our easy-to-follow recipes and tips.</p>
        <button className='mt-[50px] bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800 transition-all duration-150 hover:shadow-2xl cursor-pointer'>Learn More</button>
      </div>
      <div className='relative flex-1 items-center overflow-hidden'> 
        <div className='block md:hidden absolute inset-0  bg-black/50'></div>
        <div className=' md:hidden absolute inset-0 flex items-center justify-center ml-4'>
          <h2 className='text-5xl font-bold text-white'>Everyone can be a <br />chef in their own kitchen</h2>
        </div>
        <img src={assets.chef} alt="" />
      </div>
    </div>
  )
}

export default BeChef