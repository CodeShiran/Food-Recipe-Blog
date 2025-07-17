import React from 'react'

const Blogs = () => {
  return (
    <div className='md:px-[50px] px-[25px]'>
        <div className='mt-[50px] flex flex-col justify-center items-center mx-auto'>
            <h1 className='text-4xl font-bold'>Blog & Article</h1>
            <p className='text-sm text-center mt-4 text-gray-500'>Welcome to our blog section! Here you will find a variety of articles and posts related to food recipes, cooking tips, and culinary inspiration. <br /> Stay tuned for our latest updates!</p>
            <div className='flex flex-row items-center justify-between mt-6 rounded-2xl p-2 shadow-md border-1 border-gray-300 bg-white max-w-[600px] w-full'>
                <input type="text" className='p-2 focus:outline-none' placeholder='Search articles...' />
                <button className='bg-black text-white w-[100px] rounded-md p-2 ml-2'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Blogs