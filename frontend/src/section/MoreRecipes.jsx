import React from 'react'
import moreRecipes from '../assets/moreRecipes'
import RecipeCard from '../components/RecipeCard'

const MoreRecipes = () => {
  return (
    <div className='px-[50px]'>
        <div className='flex flex-row items-center justify-center gap-4 mt-[100px]'>
            <div className='flex-1'>
                <h2 className='text-3xl font-semibold'>Try this delicious recipe to make <br /> your day</h2>
            </div>
            <div className='flex-1'>
                <p className='text-gray-400'>Discover a variety of delicious recipes that are easy to make and perfect <br /> for any occasion.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px] justify-items-center mt-[50px]'>
            {
                moreRecipes.slice(0, 8).map((recipe, index) => (
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
    </div>
  )
}

export default MoreRecipes