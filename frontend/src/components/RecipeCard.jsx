import React from 'react'
import { TbStopwatch } from "react-icons/tb";
import { CiForkAndKnife } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const RecipeCard = ({image, name, time, type}) => {
  return (
    <div className='relative flex flex-col h-[350px] w-[300px] px-3 py-4 bg-[#E7F9FD] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group'>
        <div className='w-full h-[200px] bg-gray-200 rounded-t-2xl overflow-hidden flex items-center justify-center'>
            <img src={image} alt="" className="transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className=''>
            <h2 className='font-semibold mt-[20px]'>{name}</h2>
        </div>
        <div className='flex items-center flex-row gap-8 mt-[20px]'>
            <span className='flex items-center flex-row gap-2'>
                <TbStopwatch className='text-black' />
                {time}
            </span>
            <span className='flex items-center flex-row gap-2'>
                <CiForkAndKnife className='text-black' />
                {type}
            </span>
        </div>
        <div className='absolute top-10 right-10 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md group'>
            <FaHeart className='text-red-500 group-hover:text-red-700 transition-colors duration-300 group-hover:shadow-2xl group-hover:cursor-pointer' />
        </div>
    </div>
  )
}

export default RecipeCard