import React from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";

const AiChat = () => {
  return (
    <div className='md:px-[50px] px-[25px] py-[150px]'>
        <div className='mt-[100px] text-center'>
            <h1 className='text-4xl font-bold'>AI Chat</h1>
        </div>
        <div className='mt-[50px] flex flex-row items-center justify-between max-w-[600px] mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-md bg-white'>
            <div className='w-full '>
                <input className='p-2 focus:outline-none' type="text" placeholder='Type your message...' />
            </div>
            <button>
                <FaCircleArrowUp className='text-2xl ' />
            </button>
        </div>
    </div>
  )
}

export default AiChat