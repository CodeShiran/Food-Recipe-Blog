import express from 'express'
import { createRecipe, deleteRecipe, editRecipe, getAllRecipes, getRecipe } from '../controllers/recipe.controller.js'

const recipeRouter = express.Router()

recipeRouter.post('/create', createRecipe)
recipeRouter.get('/', getAllRecipes)
recipeRouter.get('/:id', getRecipe)
recipeRouter.put('/edit/:id', editRecipe)
recipeRouter.delete('/delete/:id', deleteRecipe)


export default recipeRouter