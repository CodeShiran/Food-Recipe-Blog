import express from "express";
import { createPost, deletePost, editPost, getAllPosts } from "../controllers/posts.controller.js";

const postsRouter = express.Router();

postsRouter.post('/create', createPost)
postsRouter.get('/', getAllPosts)
postsRouter.put('/edit/:id', editPost)
postsRouter.delete('/delete/:id', deletePost)


export default postsRouter;

