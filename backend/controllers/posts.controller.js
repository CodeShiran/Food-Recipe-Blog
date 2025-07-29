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

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({posts})
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const getPost = async (req, res) => {
    const {id} = req.params

    try {
       const post = await Post.findById(id)
         if (!post) {
              return res.status(404).json({message: 'Post not found'});
         }  
        res.status(200).json({post}) 
    } catch (error) {
        console.error("Error fetching post:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const editPost = async (req, res) => {
    const {id} = req.params

    const {title, author, content, description, image} = req.body

    if(!title && !author && !content && !description && !image) {
        return res.status(400).json({message: 'Please fill at least one field to update'});
    }

    const updatedFields = {}
    if(title) updatedFields.title = title
    if(author) updatedFields.author = author
    if(content) updatedFields.content = content
    if(description) updatedFields.description = description
    if(image) updatedFields.image = image

    try {
        const updatedPost = await Post.findByIdAndUpdate(id, updatedFields, { new: true });
        if (!updatedPost) {
            return res.status(404).json({message: 'Post not found'});
        }
        res.status(200).json({message: 'Post updated successfully', post: updatedPost});
    } catch (error) {
        console.error("Error editing post:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params

    try {
        const deletedPost = await Post.findByIdAndDelete(id)
        if (!deletedPost) {
            return res.status(404).json({message: 'Post not found'});
        }
        res.status(200).json({message: 'Post deleted successfully'});
    } catch (error) {
        console.error("Error deleting post:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}