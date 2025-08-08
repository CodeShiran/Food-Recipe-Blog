import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export const AppContext = createContext();


const ContextProvider = ({children}) => {

    const [blogPosts, setBlogPosts] = useState([]);
    const [recipes, setRecipes] = useState([])
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchAllBlogPosts = async () => {
            try {
                const url = 'http://localhost:3000/api/posts'
                const response = await axios.get(url)
                setBlogPosts(response.data.posts)
                console.log("Posts fetched successfully:", response.data);
            } catch (error) {
                console.error("Error fetching posts:", error.message);
            }
        }

        fetchAllBlogPosts();
    }, [])


    const addBlog = async (blogPost) => {
        try {
            const url = 'http://localhost:3000/api/posts/create'
            const response = await axios.post(url, blogPost, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setBlogPosts((prevPosts) => [...prevPosts, response.data.post])
            console.log("Blog post added successfully:", response.data);
        } catch (error) {
            console.error("Error adding blog post:", error.message);
        }
    }

    useEffect(() => {
        const fetchAllRecipes = async () => {
            try {
                const url = 'http://localhost:3000/api/recipes'
                const response = await axios.get(url)
                setRecipes(response.data.recipes)
                console.log("Recipes fetched successfully:", response.data);

            } catch (error) {
                console.error("Error Fetching data", error.message)
            }
        }
        fetchAllRecipes();
    }, [])

    const addRecipe = async (recipeData) => {
        try {
            const url = 'http://localhost:3000/api/recipes/create'
            const response = await axios.post(url, recipeData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setRecipes((prevRecipes) => [...prevRecipes, response.data.recipe])
            console.log("Recipe added successfully:", response.data);
        } catch (error) {
            console.error("Error adding recipe:", error.message);
        }
    }

    const aiChat = async (foodName) => {
        try {
            const url = 'http://localhost:3000/api/ai-chat'
            const response = await axios.post(url, { foodName })
            console.log("AI chat response:", response.data);
            return response.data.recipe; // Assuming the response contains a 'response' field with the AI's reply
        } catch (error) {
            console.error("Error in AI chat:", error.message);
        }
    }

    const login = async (email, password) => {
        try {
            const url = 'http://localhost:3000/api/users/login'
            const response = await axios.post(url, { email, password }, { withCredentials: true })
            console.log("Login successful:", response.data);
            setCurrentUser(response.data.data); 
            return response.data; // Assuming the response contains user data or a token
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    }

    

    return (
        <AppContext.Provider value={{blogPosts, recipes, addRecipe, aiChat, login, currentUser, addBlog}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;