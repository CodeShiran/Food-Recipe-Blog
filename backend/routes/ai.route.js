import express from 'express'
import { SearchFoods } from '../controllers/ai.controller.js'


const aiRouter = express.Router()

aiRouter.post('/', SearchFoods)

export default aiRouter