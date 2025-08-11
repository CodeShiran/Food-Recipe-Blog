import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';

const BlogCard = ({ authorId, title, description, postImg, personImg, personName, date, onClick }) => {
    
    const {fetchUserById} = useContext(AppContext)
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        if(!authorId) return
        console.log("blog post author", authorId)
        const fetchUser = async () => {
            const user = await fetchUserById(authorId)
            setUserDetails(user)
            console.log(user)

        }
        fetchUser()
    },[])
  return (
    <div onClick={onClick} className='bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4 group w-full'>
        <div className='w-full max-w-[400px] h-[200px] rounded-lg flex items-center justify-center mx-auto overflow-hidden'>
            <img src={postImg} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' alt={title} />
        </div>
        <div className='flex flex-col gap-3 flex-1'>
            <h4 className='text-2xl font-semibold'>{title}</h4>
            <p className='text-gray-600'>{description}</p>
            <div className='flex flex-row items-center gap-8 mt-2'>
                <div className='flex flex-row items-center gap-3'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        <img src={userDetails?.image} alt={personName} className="w-full h-full object-cover" />
                    </div>
                    <p className='font-semibold'>{userDetails?.firstName} {userDetails?.lastName}</p>
                </div>
                <p className='text-gray-500'>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard