import React from 'react'

const SmallCard = ({onClick, image, title, person}) => {
  return (
    <div onClick={onClick} className='flex flex-row items-center gap-4 p-4 bg-white   max-w-[450px] group'>
        <div className='max-w-[250px] h-[100px] rounded-2xl overflow-hidden'>
            <img src={image} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' alt={title} />
        </div>
        <div className='flex flex-col'>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='text-sm text-gray-500'>{person}</p>
        </div>
    </div>
  )
}

export default SmallCard