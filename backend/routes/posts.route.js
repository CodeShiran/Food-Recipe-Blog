import express from "express";
import { createPost, deletePost, editPost, getAllPosts, getPost } from "../controllers/posts.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const postsRouter = express.Router();

postsRouter.post('/create', authMiddleware, createPost)
postsRouter.get('/', authMiddleware, getAllPosts)
postsRouter.get('/:id', authMiddleware, getPost)
postsRouter.put('/edit/:id', authMiddleware, editPost)
postsRouter.delete('/delete/:id', authMiddleware, deletePost)


export default postsRouter;

