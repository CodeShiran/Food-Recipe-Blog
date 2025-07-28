import express from 'express'
import { createRecipe } from '../controllers/recipe.controller.js'

const recipeRouter = express.Router()

recipeRouter.post('/create', createRecipe)


export default recipeRouter