import express from "express";
import { createPost, editPost, getAllPosts } from "../controllers/posts.controller.js";

const postsRouter = express.Router();

postsRouter.post('/create', createPost)
postsRouter.get('/', getAllPosts)
postsRouter.put('/edit/:id', editPost)


export default postsRouter;

