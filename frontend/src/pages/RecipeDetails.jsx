import React from 'react'
import { TbStopwatch } from "react-icons/tb";
import { CiForkAndKnife } from "react-icons/ci";
import { IoPrintOutline, IoShareOutline } from "react-icons/io5";   
import assets from "../assets/assets";

const nutritionData = [
  { label: 'Calories', value: '200 kcal' },
  { label: 'Protein', value: '10 g' },
  { label: 'Carbohydrates', value: '30 g' },
  { label: 'Fat', value: '5 g' },
];

const ingredients = [
  '2 cups cooked rice',
  '1 cup mixed vegetables',
  '2 eggs',
  '2 tablespoons soy sauce',
  '1 tablespoon sesame oil',
  'Salt and pepper to taste',
];

const RecipeDetails = () => {
  return (
    <div className='px-[25px] md:px-[50px]'>
        <div className='flex items-center justify-between py-[30px]'>
            <h1 className='text-3xl md:text-5xl font-semibold'>Healthy Japanese Fried Rice</h1>
            <div className='hidden md:flex items-center gap-6'>
                <div className='flex items-center justify-center rounded-full w-15 h-15 bg-[#E7FAFE] cursor-pointer hover:bg-[#D1F2F6] transition-colors duration-200'>
                    <IoPrintOutline />
                </div>
                <div className='flex items-center justify-center rounded-full w-15 h-15 bg-[#E7FAFE] cursor-pointer hover:bg-[#D1F2F6] transition-colors duration-200'>
                    <IoShareOutline />
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap items-center gap-4 md:gap-8'>
          <div className='flex items-center gap-2 md:gap-4'>
            <div className='w-10 h-10 rounded-full overflow-hidden'>
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
            </div>
            <div className='flex flex-col border-b-1 border-gray-300 pb-2 md:border-none'>
              <p className='font-semibold'>John Smith</p>
              <p className='text-sm text-gray-500'>12 July 2025</p>
            </div>
          </div>
          <div className='flex items-center gap-2 md:gap-8 md:pl-6 md:pr-2 border-l-0 md:border-l-1 border-gray-300 max-md:border-b-1'>
            <TbStopwatch />
            <div className='flex flex-col text-sm font-semibold'>
              <p>Prep Time</p>
              <p>15 min</p>
            </div>
          </div>
          <div className='flex items-center gap-2 md:gap-6 md:px-6 md:border-l-1 md:border-r-1 border-gray-300 max-md:border-b-1'>
            <CiForkAndKnife />
            <div className='flex flex-col font-semibold text-sm'>
              <p>Cook Time</p>
              <p>15 min</p>
            </div>
          </div>
          <div className='flex items-center gap-2 md:gap-6 md:px-2 border-gray-300'>
            <CiForkAndKnife />
            <p className='font-semibold text-sm'>Chicken</p>
          </div>
        </div>
        <div className='mt-8 flex flex-col md:flex-row gap-6 items-center'>
            <div className='flex-2/3 w-full h-[600px] rounded-lg overflow-hidden'>
                <img src={assets.japaneseFriedRice} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='flex-1/3 h-[600px] bg-[#E7FAFE] px-[30px] py-[20px] rounded-lg flex flex-col gap-10'>
                <h4>Nutrition Information</h4>
                {
                    nutritionData.map((item, index) => (
                        <div key={index} className='flex items-center justify-between  border-b-1 border-gray-300'>
                            <span className='text-sm'>{item.label}</span>
                            <span className='text-sm font-semibold'>{item.value}</span>
                        </div>
                    ))
                }
                <div className='text-center mt-[100px] text-sm text-gray-500'>
                    <p>This Healthy Japanese Fried Rice is a delicious and nutritious meal option that is perfect for any time of day. Packed with flavor and wholesome ingredients, it's a dish you can feel good about serving to your family.</p>
                </div>
            </div>
        </div>
        
        <div className='mt-5 text-center'>
            <p className='mt-8 text-gray-600'>
                This recipe for Healthy Japanese Fried Rice is not only quick and easy to prepare, but it also offers a delightful blend of flavors and textures. The combination of fresh vegetables, tender chicken, and perfectly cooked rice makes it a satisfying meal that can be enjoyed any time of the day. Whether you're looking for a nutritious lunch or a comforting dinner, this dish is sure to please.
            </p>
        </div>
        <div className='flex flex-row gap-6 mt-8'>
            <div className='flex-2/3'>
                <h3 className='text-2xl font-semibold mb-[40px]'>Ingredients</h3>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className='flex items-center gap-2 border-b-1 border-gray-300 py-6'>
                        <span className='text-sm font-semibold'>{ingredient}</span>
                    </div>
                ))}
            </div>
            <div className='flex-1/3'>
                <h3>Other Recipes</h3>

            </div>
        </div>
    </div>
  )
}

export default RecipeDetails