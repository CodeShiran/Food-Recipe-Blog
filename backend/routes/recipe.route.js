import express from 'express'
import { createRecipe, deleteRecipe, editRecipe, getAllRecipes, getRecipe } from '../controllers/recipe.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const recipeRouter = express.Router()

recipeRouter.post('/create', authMiddleware, createRecipe)
recipeRouter.get('/', authMiddleware, getAllRecipes)
recipeRouter.get('/:id', authMiddleware, getRecipe)
recipeRouter.put('/edit/:id', authMiddleware, editRecipe)
recipeRouter.delete('/delete/:id', authMiddleware, deleteRecipe)


export default recipeRouter