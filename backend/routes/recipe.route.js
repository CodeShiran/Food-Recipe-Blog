import express from 'express'
import { createRecipe, deleteRecipe, editRecipe, getAllRecipes, getRecipe } from '../controllers/recipe.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import upload from '../middlewares/upload.js'

const recipeRouter = express.Router()

recipeRouter.post('/create', authMiddleware, upload.single('image'), createRecipe)
recipeRouter.get('/', authMiddleware, getAllRecipes)
recipeRouter.get('/:id', authMiddleware, getRecipe)
recipeRouter.put('/edit/:id', authMiddleware, upload.single('image'), editRecipe)
recipeRouter.delete('/delete/:id', authMiddleware, deleteRecipe)


export default recipeRouter