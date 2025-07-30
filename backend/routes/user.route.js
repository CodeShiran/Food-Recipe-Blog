import express from "express";
import { deleteUser, EditUser, getAllUsers, userRegister } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const userRouter = express.Router()

userRouter.post('/register', authMiddleware, userRegister)
userRouter.get('/', authMiddleware, getAllUsers)
userRouter.put('/:id', authMiddleware, EditUser)
userRouter.delete('/:id', authMiddleware, deleteUser)
export default userRouter;