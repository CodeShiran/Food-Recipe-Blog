import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import EmailBox from '../components/EmailBox';
import moreRecipes from '../assets/moreRecipes';
import RecipeCard from '../components/RecipeCard';
import Chat from '../components/Chat';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const {fetchBlogById, fetchUserById} = useContext(AppContext)
    const [blogPost, setBlogPost] = useState(null)
    const [userDetails, setUserDetails] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const fetchBlog = async () => {
            const blog = await fetchBlogById(id)
            setBlogPost(blog)
            console.log(blog)
            console.log(id)
        }
        fetchBlog()
    }, [id]) 
    
    useEffect(() => {
        if(!blogPost?.author) return
        console.log("blog post author", blogPost?.author)
        const fetchUser = async () => {
            const user = await fetchUserById(blogPost?.author)
            setUserDetails(user)
            console.log(user)

        }
        fetchUser()
    },[blogPost])
    
    
  return (
    <div className='md:px-[50px] px-[25px]'>
        <Chat />
        <div className='text-center mt-[50px] flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-semibold'>{blogPost?.title}</h1>
            <div className='flex items-center flex-row gap-8 mt-[25px]'>
                <div className='flex items-center flex-row gap-8 px-[30px] border-r-1 border-gray-300'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        <img src={userDetails?.image} alt="" />
                    </div>
                    <p className='text-sm font-semibold'>By {userDetails?.firstName} {userDetails?.lastName}</p>
                </div>
                <p className='text-sm  text-gray-500'>{new Date(blogPost?.createdAt).toLocaleDateString()}</p>
            </div>
            <p className='text-gray-500 mt-[25px]'>{blogPost?.description}</p>
        </div>
        <div className='w-full mt-[50px]'>
            <img className='w-full h-auto max-w-[1000px] mx-auto object-cover rounded-2xl' src={blogPost?.image} alt="" />
        </div>
        <div className='mt-[50px] flex flex-col md:flex-row gap-6'>
            <div className='flex-3/4'>
                <p className='text-gray-700'>{blogPost?.content}</p>
            </div>
            <div className='flex-1/4 items-center justify-center flex flex-row md:flex-col gap-6'>
                <h3 className='text-lg font-semibold'>Share this on</h3>
                <FaFacebookF  className='hover:text-blue-600 transition-all duration-150'/>
                <FaInstagram className='hover:text-pink-600 transition-all duration-150'/>
                <FaTwitter className='hover:text-blue-400 transition-all duration-150'/>
            </div>
        </div>
        <EmailBox />
        <div className='mt-8 mb-10'>
            <h3 className='text-2xl font-semibold text-center'>You May Like These Foods Too</h3>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
              {moreRecipes.slice(0, 4).map((recipes, index) => (
                <RecipeCard
                        key={index}
                        image={recipes.image}
                        name={recipes.name}
                        time={recipes.time}
                        type={recipes.type}
                        bgColor="bg-[#ffffff]"
                    />
              ))}
            </div>
        </div>
    </div>
  )
}

export default BlogPost