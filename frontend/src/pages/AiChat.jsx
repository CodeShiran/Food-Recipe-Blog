import React, { useEffect, useRef } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";
import assets from '../assets/assets';

const AiChat = () => {
    const videoRef = useRef(null);
    useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5x speed (slower)
    }
  }, []);
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

      <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-sm"></div>

      {/* Foreground Content */}
      <div className="relative z-20 md:px-[50px] px-[25px] py-[150px]">
        <div className='mt-[100px] text-center'>
          <h1 className='text-4xl font-bold text-white drop-shadow-lg'>AI Chat</h1>
        </div>
        <div className='mt-[50px] flex flex-row items-center justify-between max-w-[600px] mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-md  backdrop-blur-md'>
          <div className='w-full '>
            <input className='p-2 focus:outline-none' type="text" placeholder='Type your message...' />
          </div>
          <button>
            <FaCircleArrowUp className='text-2xl ' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AiChat