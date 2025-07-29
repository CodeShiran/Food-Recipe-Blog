import express from 'express'
import { subscribedUser } from '../controllers/email.controller'

const emailRouter = express.Router()

emailRouter.post('/subscribe', subscribedUser)