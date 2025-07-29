import express from 'express'
import { createRecipe, editRecipe, getAllRecipes, getRecipe } from '../controllers/recipe.controller.js'

const recipeRouter = express.Router()

recipeRouter.post('/create', createRecipe)
recipeRouter.get('/', getAllRecipes)
recipeRouter.get('/:id', getRecipe)
recipeRouter.put('/edit/:id', editRecipe)


export default recipeRouter