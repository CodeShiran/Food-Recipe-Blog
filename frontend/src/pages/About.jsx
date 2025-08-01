import React from 'react'
import assets from '../assets/assets'
import Email from '../section/Email'
import EmailBox from '../components/EmailBox'
import Chat from '../components/Chat'

const About = () => {
  return (
    <div className='md:px-[50px] px-[25px]'>
        <Chat />
        <div className='flex flex-col items-center mt-10'>
            <h1 className='text-4xl font-bold'>About Us</h1>
            <p className='mt-[25px] text-center text-gray-500 text-[20px]'>We are a team of food enthusiasts dedicated to sharing our love for cooking and delicious recipes. Our mission is to inspire home cooks of all skill levels to create amazing meals for their friends and family.</p>
        </div>
        <div className='flex flex-col  md:flex-row gap-6 mt-10'>
            <div className='flex-1/2 rounded-lg p-5 h-[400px]'>
                <img src={assets.fruitSalad} className='w-full h-full rounded-lg object-cover' alt="" />
            </div>
            <div className='flex-1/2 rounded-lg p-5 flex-col items-start bg-[#E7F9FD]'>
                <h4 className='text-2xl font-bold'>Our Vision</h4>
                <p className='mt-[25px] text-gray-500'>Our vision is to inspire a global community of food lovers by sharing authentic recipes, culinary tips, and cultural stories. We aim to foster creativity in every kitchen, encourage mindful eating, and celebrate the joy of discovering new flavors. Through our food blog, we strive to connect people with the world of gastronomy, making every meal an adventure and every dish a cherished memory. We believe that food has the power to bring people together, transcend cultural boundaries, and create lasting connections. Our platform is dedicated to nurturing curiosity and appreciation for diverse cuisines, supporting sustainable cooking practices, and empowering individuals to embrace their passion for food. By continually evolving and sharing new ideas, we hope to ignite a lifelong love for cooking and eating well in every member of our community.</p>
            </div>
        </div>
        <div className='flex flex-col-reverse  md:flex-row gap-6 mt-10'>
            <div className='flex-1/2 rounded-lg p-5 flex-col items-start bg-[#E7F9FD]'>
                <h4 className='text-2xl font-bold'>Our Mission</h4>
                <p className='mt-[25px] text-gray-500'>Our mission is to empower individuals to explore, create, and enjoy delicious food by providing high-quality recipes, insightful cooking guides, and engaging stories. We are dedicated to building a vibrant community where everyone—whether a novice or seasoned chef—can learn, share, and celebrate the art of cooking. Through our content, we aim to make every meal meaningful and every kitchen a place of joy and discovery.We strive to promote culinary curiosity, celebrate diverse food cultures, and encourage sustainable practices in everyday cooking. By connecting food enthusiasts from around the world, we foster a spirit of collaboration and support, helping each person discover new skills, flavors, and traditions. Our commitment is to inspire confidence in the kitchen and cultivate a lifelong love for the pleasures of good food.</p>
            </div>
            <div className='flex-1/2 rounded-lg p-5 h-[400px]'>
                <img src={assets.cookingWoman2} className='w-full h-full rounded-lg object-cover' alt="" />
            </div>
        </div>
        <EmailBox />
    </div>
  )
}

export default About