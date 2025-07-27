import express from "express";
import { getAllUsers, userRegister } from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.get('/', getAllUsers)

export default userRouter;