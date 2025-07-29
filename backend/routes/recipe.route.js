import express from 'express'
import { createRecipe, editRecipe, getAllRecipes } from '../controllers/recipe.controller.js'

const recipeRouter = express.Router()

recipeRouter.post('/create', createRecipe)
recipeRouter.get('/', getAllRecipes)
recipeRouter.put('/edit/:id', editRecipe)


export default recipeRouter