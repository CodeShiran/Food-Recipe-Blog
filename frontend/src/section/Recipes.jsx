import React from 'react'
import RecipeCard from '../components/RecipeCard'
import recipes from '../assets/recipes'

const Recipes = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-4 mt-[100px]'>
            <h1 className='text-4xl'>Simple and tasty recipes</h1>
            <p className='text-gray-400'>Discover a variety of delicious recipes that are easy to make and perfect for any occasion.</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[25px] justify-items-center mt-[75px]'>
             {
                recipes.map((recipe, index) => (
                    <RecipeCard 
                        key={index}
                        image={recipe.image}
                        name={recipe.name}
                        time={recipe.time}
                        type={recipe.type}
                    />
                ))
             }
        </div>
    </div>
  )
}

export default Recipes