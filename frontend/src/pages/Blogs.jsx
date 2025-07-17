import React from 'react'
import BlogCard from '../components/BlogCard'
import { assets } from '../assets/assets'
import SmallCard from '../components/SmallCard'

const postData = [{
    id:1,
    title: "The Art of Cooking: A Journey Through Culinary Traditions",
    description: "Explore the rich history and diverse traditions of cooking around the world. From ancient techniques to modern innovations, discover how cooking has evolved and continues to inspire chefs and home cooks alike.",
    postImg: assets.post1,
    personImg: "https://randomuser.me/api/portraits/men/47.jpg",
    personName: "John Doe",
    date: "January 1, 2023"
},
{
    id:2,
    title: "Mastering the Grill: Tips and Techniques for Perfectly Grilled Meats",
    description: "Unlock the secrets to grilling perfection with our expert tips and techniques. From choosing the right cuts of meat to mastering the grill temperature, elevate your outdoor cooking game and impress your guests.",
    postImg: assets.post2,
    personImg: "https://randomuser.me/api/portraits/women/26.jpg",
    personName: "Jane Smith",
    date: "February 15, 2023"
},
{
    id:3,
    title: "Vegetarian Delights: Creative and Delicious Meatless Recipes",
    description: "Discover a world of flavor with our collection of vegetarian recipes. From hearty mains to delightful desserts, these dishes prove that you don't need meat to enjoy a satisfying meal.",
    postImg: assets.post3,
    personImg: "https://randomuser.me/api/portraits/women/68.jpg",
    personName: "Emily Johnson",
    date: "March 10, 2023"
},
{
    id:4,
    title: "Baking Basics: Essential Techniques for Perfect Pastries",
    description: "Master the art of baking with our essential techniques for creating perfect pastries. From flaky croissants to rich éclairs, learn the tips and tricks that will elevate your baking skills.",
    postImg: assets.post4,
    personImg: "https://randomuser.me/api/portraits/men/75.jpg",
    personName: "Michael Brown",
    date: "April 5, 2023"
},{
    id:5,
    title: "Global Flavors: Exploring International Cuisines",
    description: "Embark on a culinary journey around the world with our exploration of international cuisines. Discover the unique ingredients, flavors, and cooking techniques that define each culture's culinary heritage.",
    postImg: assets.post5,
    personImg: "https://randomuser.me/api/portraits/women/75.jpg",
    personName: "Sophia Lee",
    date: "May 20, 2023"
}, {
    id:6,
    title: "Healthy Eating: Nutritious Recipes for a Balanced Diet",
    description: "Embrace a healthier lifestyle with our nutritious recipes designed for a balanced diet. From wholesome breakfasts to satisfying dinners, these dishes are packed with flavor and good-for-you ingredients.",
    postImg: assets.post6,
    personImg: "https://randomuser.me/api/portraits/men/29.jpg",
    personName: "David Wilson",
    date: "June 10, 2023"
}]

const recipes = [
    {
        id: 1,
        title: "Healthy Japanese Fried Rice",
        image: assets.chickenMeatballsSm,
        person: "John Doe",
    },
    {
        id: 2,
        title: "Spaghetti Carbonara",
        image: assets.creamyChickenSm,
        person: "Jane Smith",
    },
    {
        id: 3,
        title: "Chicken Tikka Masala",
        image: assets.potChickensm,
        person: "Alice Johnson",
    },
]

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
        <div className='mt-[50px] flex flex-row gap-6'>
            <div className='flex-2/3 flex flex-col gap-6'>
                {postData.map((post) => (
                <BlogCard
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    postImg={post.postImg}
                    personImg={post.personImg}
                    personName={post.personName}
                    date={post.date}
                />
            ))}
            </div>
            <div className='flex-1/3 flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Related Recipes</h2>
                <div className='w-full flex flex-col gap-4'>
                    {recipes.map((recipe) => (
                        <SmallCard
                            key={recipe.id}
                            image={recipe.image}
                            title={recipe.title}
                            person={recipe.person}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs