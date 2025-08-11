import express from "express";
import { deleteUser, EditUser, getAllUsers, getUser, loginUser, logoutUser, userRegister } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', loginUser)
userRouter.post('/logout', logoutUser)
userRouter.get('/', authMiddleware, getAllUsers)
userRouter.get('/:id', getUser)
userRouter.put('/:id', authMiddleware, upload.single('image'), EditUser)
userRouter.delete('/:id', authMiddleware, deleteUser)
export default userRouter;