import express from 'express'
import { createRecipe, getAllRecipes } from '../controllers/recipe.controller.js'

const recipeRouter = express.Router()

recipeRouter.post('/create', createRecipe)
recipeRouter.get('/', getAllRecipes)


export default recipeRouter