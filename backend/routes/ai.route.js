import express from 'express'
import { SearchFoods } from '../controllers/ai.controller'


const aiRouter = express.Router()

aiRouter.post('/ai-chat', SearchFoods)

export default aiRouter