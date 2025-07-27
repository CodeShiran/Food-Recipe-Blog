import express from "express";
import { createPost } from "../controllers/posts.controller.js";

const postsRouter = express.Router();

postsRouter.post('/create', createPost)


export default postsRouter;

