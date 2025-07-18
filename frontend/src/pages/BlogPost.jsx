import React from 'react'
import assets from '../assets/assets'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import EmailBox from '../components/EmailBox';
import moreRecipes from '../assets/moreRecipes';
import RecipeCard from '../components/RecipeCard';

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
        <div className='w-full mt-[50px]'>
            <img className='w-full h-auto object-cover rounded-2xl' src={assets.chefCooking} alt="" />
        </div>
        <div className='mt-[50px] flex flex-col md:flex-row gap-6'>
            <div className='flex-3/4'>
                <p className='text-gray-700'> To become a professional chef, you need to start with a solid foundation in culinary skills. This involves mastering essential cooking techniques such as knife skills, sautéing, roasting, grilling, and baking. Understanding flavor profiles and how different ingredients interact is crucial for creating balanced and delicious dishes. Additionally, learning about various cuisines from around the world will broaden your culinary perspective and inspire creativity. Consider enrolling in a reputable culinary school or taking online courses to gain formal training and hands-on experience. Building a strong foundation also includes learning about food safety, kitchen management, and proper plating techniques. Networking with other chefs and participating in internships or apprenticeships can further enhance your skills and prepare you for a successful career in the culinary industry.</p>
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