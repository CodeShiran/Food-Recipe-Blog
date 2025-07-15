import React from 'react'
import assets from '../assets/assets'

const EmailBox = () => {
  return (
    <div className='relative w-full h-[400px] px-[50px] text-center mt-[100px] bg-[#E7F9FD] rounded-2xl py-[25px] flex flex-col items-center justify-center z-40 overflow-hidden'>
        <h1 className='text-3xl font-semibold'>Deliciousness to your inbox</h1>
        <p className='text-gray-400 mt-[25px]'>Subscribe to our newsletter for the latest recipes and cooking tips!</p>
        <div className="mt-[75px] flex flex-col md:flex-row items-center bg-white rounded-2xl px-2 py-2 shadow-md w-full max-w-[400px] mx-auto gap-3 md:gap-0 z-40">
  <input
    type="text"
    placeholder="Your Email Address"
    className="focus:outline-none flex-1 px-3 py-2 rounded-2xl md:rounded-r-none w-full md:w-auto"
  />
  <button
    className="bg-black text-white px-4 py-2 rounded-2xl md:rounded-l-none hover:bg-gray-800 transition-all duration-150 hover:shadow-2xl cursor-pointer w-full md:w-auto"
  >
    Subscribe
  </button>
</div>
        <div className='hidden md:block z-20 absolute bottom-[-50px] left-[-70px] w-full h-full'>
            <img src={assets.veganSaladBg} alt="" />
        </div>
        <div className='hidden md:block absolute bottom-0 right-0 w-auto h-auto object-cover'>
            <img src={assets.eggSaladBg} alt="" />
        </div>
        <div className='hidden md:block absolute bottom-8 right-[300px] w-auto h-auto object-cover'>
            <img src={assets.leavesBg} alt="" />
        </div>
    </div>
  )
}

export default EmailBox