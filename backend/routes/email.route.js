import express from 'express'
import { subscribedUser } from '../controllers/email.controller.js'

const emailRouter = express.Router()

emailRouter.post('/subscribe', subscribedUser)


export default emailRouter