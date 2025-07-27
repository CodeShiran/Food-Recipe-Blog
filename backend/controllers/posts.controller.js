import Post from "../models/post.js";

export const createPost = async (req, res) => {
    const {title, author, content, description, image } = req.body

    if(!title || !author || !content || !description) {
        return res.status(400).json({message: 'Please fill all fields'})
    }

    try {
        const newPost = new Post({ title, author, content, description, image})
        await newPost.save()
        res.status(201).json({message: 'Post created successfully', post: newPost})
    } catch (error) {
        console.error("Error creating post:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }



}