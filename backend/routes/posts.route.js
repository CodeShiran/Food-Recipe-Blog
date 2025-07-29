import express from "express";
import { createPost, deletePost, editPost, getAllPosts, getPost } from "../controllers/posts.controller.js";

const postsRouter = express.Router();

postsRouter.post('/create', createPost)
postsRouter.get('/', getAllPosts)
postsRouter.get('/:id', getPost)
postsRouter.put('/edit/:id', editPost)
postsRouter.delete('/delete/:id', deletePost)


export default postsRouter;

