import express from "express";
import { createPost, getAllPosts } from "../controllers/posts.controller.js";

const postsRouter = express.Router();

postsRouter.post('/create', createPost)
postsRouter.get('/', getAllPosts)


export default postsRouter;

