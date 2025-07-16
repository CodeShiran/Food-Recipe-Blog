import React from 'react'

const SmallCard = ({image, title, person}) => {
  return (
    <div className='flex flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-[250px]'>
        <div className='w-[250px] h-[100px]'>
            <img src={image} alt={title} />
        </div>
        <div className='flex flex-col'>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='text-sm text-gray-500'>{person}</p>
        </div>
    </div>
  )
}

export default SmallCard