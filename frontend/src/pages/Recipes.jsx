import React from 'react'
import moreRecipes from '../assets/moreRecipes'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
  return (
    <div className='md:px-[50px] px-[25px]'>
      <h1 className='text-4xl text-center mt-[50px]'>Recipes</h1>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <select className='border border-gray-300 p-2'>
            <option value=''>All Categories</option>
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
          </select>
        </div>
        <div>
          <input
            type='text'
            placeholder='Search Recipes...'
            className='border border-gray-300 p-2'
          />
          <button className='bg-blue-500 text-white p-2'>Search</button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px] justify-items-center mt-[50px]'>
        {
          moreRecipes.map((recipe, index) => (
            <RecipeCard
                        key={index}
                        image={recipe.image}
                        name={recipe.name}
                        time={recipe.time}
                        type={recipe.type}
                        bgColor="bg-[#ffffff]"
                    />
          ))
        }
      </div>
      <div className='text-center mt-[50px]'>
        <p>pages</p>
      </div>
    </div>
  )
}

export default Recipes