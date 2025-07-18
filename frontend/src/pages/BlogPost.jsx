import React from 'react'

const BlogPost = () => {
  return (
    <div className='md:px-[50px] px-[25px]'>
        <div className='text-center mt-[50px] flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-semibold'>Full Guide to Becoming a Professional Chef</h1>
            <div className='flex items-center flex-row gap-8 mt-[25px]'>
                <div className='flex items-center flex-row gap-8 px-[30px] border-r-1 border-gray-300'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="" />
                    </div>
                    <p className='text-sm font-semibold'>By John Doe</p>
                </div>
                <p className='text-sm  text-gray-500'>March 10, 2023</p>
            </div>
            <p className='text-gray-500 mt-[25px]'>Becoming a professional chef requires dedication, creativity, and a passion for food. In this guide, we will explore the essential steps to kickstart your culinary career.</p>
        </div>
    </div>
  )
}

export default BlogPost