import React, { useEffect, useRef } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";
import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const AiChat = () => {
    const videoRef = useRef(null);
    useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5x speed (slower)
    }
  }, []);

  const navigate = useNavigate()
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={assets.bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-sm pointer-events-none"></div>

      <div
  onClick={() => navigate('/')}
  className='absolute top-5 left-5 z-30 cursor-pointer pointer-events-auto'
>
  <h2 className='logo-font text-2xl text-white'>Foodieland</h2>
</div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen md:px-[50px] px-[25px]">
        <div className='mt-[100px] text-center'>
          <h1 className='text-4xl font-bold text-white drop-shadow-lg'>Explore Recipes with AI Search</h1>
        </div>
        <div className='mt-[50px] flex flex-row items-center justify-between max-w-[600px] w-full mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-md backdrop-blur-md'>
          <div className='flex-1'>
            <input className='p-2 focus:outline-none text-white placeholder:text-white w-full' type="text" placeholder='Type your message...' />
          </div>
          <button className="ml-2 min-w-[48px]">
            <FaCircleArrowUp className='text-2xl text-white hover:text-black duration-150 transition-all' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AiChat