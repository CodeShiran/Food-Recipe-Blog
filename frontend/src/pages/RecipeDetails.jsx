import React, { useContext, useEffect, useState } from 'react'
import { TbStopwatch } from "react-icons/tb";
import { CiForkAndKnife } from "react-icons/ci";
import { IoPrintOutline, IoShareOutline } from "react-icons/io5";   
import assets from "../assets/assets";
import SmallCard from '../components/SmallCard';
import EmailBox from '../components/EmailBox'
import Footer from '../components/Footer'
import moreRecipes from '../assets/moreRecipes';
import RecipeCard from '../components/RecipeCard'
import Chat from '../components/Chat';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const nutritionData = [
  { label: 'Calories', value: '200 kcal' },
  { label: 'Protein', value: '10 g' },
  { label: 'Carbohydrates', value: '30 g' },
  { label: 'Fat', value: '5 g' },
];

const ingredients = [
  'null'
];

const method = [{
  'null': 'null'
}]



const RecipeDetails = () => {
  const {getRecipeById} = useContext(AppContext)
  const {id} = useParams()
  const [currentRecipe, setCurrentRecipe] = useState(null); 
  const navigate = useNavigate()
  const {recipes} = useContext(AppContext)


  useEffect(() => {
    const fetchRecipe = async () => {
      const recipe = await getRecipeById(id)
      setCurrentRecipe(recipe)
    }
    fetchRecipe()
  }, [id])

  const nutritionArray = currentRecipe?.nutritionalInfo
  ? [
      { label: 'Calories', value: `${currentRecipe.nutritionalInfo.calories} kcal` },
      { label: 'Protein', value: `${currentRecipe.nutritionalInfo.protein} g` },
      { label: 'Carbohydrates', value: `${currentRecipe.nutritionalInfo.carbs} g` },
      { label: 'Fat', value: `${currentRecipe.nutritionalInfo.fats} g` },
    ]
  : nutritionData; // fallback if not present

  const ingredientsArray = currentRecipe?.ingredients || ingredients;

  const methodArray = currentRecipe?.directions || method

  return (
    <div className='px-[25px] md:px-[50px]'>
      <Chat />
        <div className='flex items-center justify-between py-[30px]'>
            <h1 className='text-3xl md:text-5xl font-semibold'>{currentRecipe?.title}</h1>
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
              <p className='text-sm text-gray-500'>{new Date(currentRecipe?.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 md:gap-8 md:pl-6 md:pr-2 border-l-0 md:border-l-1 border-gray-300 max-md:border-b-1'>
            <TbStopwatch />
            <div className='flex flex-col text-sm font-semibold'>
              <p>Prep Time</p>
              <p>{currentRecipe?.prepTime} min</p>
            </div>
          </div>
          <div className='flex items-center gap-2 md:gap-6 md:px-6 md:border-l-1 md:border-r-1 border-gray-300 max-md:border-b-1'>
            <CiForkAndKnife />
            <div className='flex flex-col font-semibold text-sm'>
              <p>Cook Time</p>
              <p>{currentRecipe?.cookTime} min</p>
            </div>
          </div>
          <div className='flex items-center gap-2 md:gap-6 md:px-2 border-gray-300'>
            <CiForkAndKnife />
            <p className='font-semibold text-sm'>{currentRecipe?.type}</p>
          </div>
        </div>
        <div className='mt-8 flex flex-col md:flex-row gap-6 items-center'>
            <div className='flex-2/3 w-full h-[600px] rounded-lg overflow-hidden'>
                <img src={currentRecipe?.image || ''} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='flex-1/3 h-[600px] bg-[#E7FAFE] px-[30px] py-[20px] rounded-lg flex flex-col gap-10'>
                <h4>Nutrition Information</h4>
                {
                    nutritionArray.map((item, index) => (
                        <div key={index} className='flex items-center justify-between  border-b-1 border-gray-300'>
                            <span className='text-sm'>{item.label}</span>
                            <span className='text-sm font-semibold'>{item.value}</span>
                        </div>
                    ))
                }
                <div className='text-center mt-[100px] text-sm text-gray-500'>
                    <p>{currentRecipe?.description}</p>
                </div>
            </div>
        </div>
        
        <div className='mt-5 text-center'>
            <p className='mt-8 text-gray-600'>
                {currentRecipe?.content}
            </p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 mt-8'>
            <div className='flex-2/3'>
                <h3 className='text-2xl font-semibold mb-[40px]'>Ingredients</h3>
                {ingredientsArray.map((ingredient, index) => (
                    <div key={index} className='flex items-center gap-2 border-b-1 border-gray-300 py-6'>
                        <span className='text-sm font-semibold'>{ingredient.name}</span>
        <span className='text-sm text-gray-500'>{ingredient.quantity}</span>
                    </div>
                ))}
            </div>
            <div className='flex-1/3'>
                <h3 className='text-2xl font-semibold mb-[40px] md:text-end'>Other Recipes</h3>
                <div className='flex flex-col gap-5 items-center md:items-end'>
                    {recipes.map((recipe) => (
                        <SmallCard
                            onClick={() =>{
                            window.scrollTo(0,0)
                             navigate(`/recipes/${recipe._id}`)
                        }}
                            key={recipe.id}
                            image={recipe.image}
                            title={recipe.title}
                            person={recipe.person}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className='mt-8 w-full md:max-w-[70%]'>
           <h3 className='text-2xl font-semibold'>Directions</h3>
          <div className='md:ml-[50px] mt-[30px]'>
          <img src={assets.cookingWoman} className='w-full h-auto' alt="" />
          <div className='flex flex-col gap-4 mt-4'>
            
            {methodArray.map((step, index) => (
              <div key={index} className='flex items-center gap-2'>
                <span className='text-lg font-semibold'>{index + 1}.</span>
                <p className='text-sm  text-gray-500'>{step.step}</p>
              </div>
            ))}
          </div>
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

export default RecipeDetails