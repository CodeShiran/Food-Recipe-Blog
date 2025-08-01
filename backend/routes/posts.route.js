import express from "express";
import { createPost, deletePost, editPost, getAllPosts, getPost } from "../controllers/posts.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";

const postsRouter = express.Router();

postsRouter.post('/create', upload.single('image'), authMiddleware, createPost)
postsRouter.get('/', authMiddleware, getAllPosts)
postsRouter.get('/:id', authMiddleware, getPost)
postsRouter.put('/edit/:id', upload.single('image'), authMiddleware, editPost)
postsRouter.delete('/delete/:id', authMiddleware, deletePost)


export default postsRouter;

