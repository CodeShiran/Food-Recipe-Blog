import express from "express";
import { deleteUser, EditUser, getAllUsers, userRegister } from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.get('/', getAllUsers)
userRouter.put('/:id', EditUser)
userRouter.delete('/:id', deleteUser)
export default userRouter;