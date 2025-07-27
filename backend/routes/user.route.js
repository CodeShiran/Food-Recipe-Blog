import express from "express";
import { EditUser, getAllUsers, userRegister } from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.get('/', getAllUsers)
userRouter.put('/:id', EditUser)
export default userRouter;