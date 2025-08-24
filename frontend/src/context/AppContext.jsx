import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export const AppContext = createContext();


const ContextProvider = ({children}) => {

    const API_BASE = import.meta.env.VITE_API_URL;
    const [blogPosts, setBlogPosts] = useState([]);
    const [recipes, setRecipes] = useState([])
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchAllBlogPosts = async () => {
            try {
                const url = `${API_BASE}/api/posts`
                const response = await axios.get(url)
                setBlogPosts(response.data.posts)
                
            } catch (error) {
                console.error("Error fetching posts:", error.message);
            }
        }

        fetchAllBlogPosts();
    }, [])

    useEffect(() => {
    const cachedUser = localStorage.getItem("user");
    if (cachedUser) {
      setCurrentUser(JSON.parse(cachedUser));
    }
  }, []);


    const addBlog = async (blogPost) => {
        try {
            const url = `${API_BASE}/api/posts/create`
            const response = await axios.post(url, blogPost, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            })
            setBlogPosts((prevPosts) => [...prevPosts, response.data.post])
           
        } catch (error) {
            console.error("Error adding blog post:", error.message);
        }
    }

        const fetchBlogById = async (id) => {
            try {
                const url = `${API_BASE}/api/posts/${id}`
                const response = await axios.get(url)
                
                return response.data.post; // Return the fetched post
                
            } catch (error) {
                console.error("Error fetching blog post by ID:", error.message);
            }
        }

        const fetchUserById = async (id) => {
            try {
                const url = `${API_BASE}/api/users/${id}`
                const response = await axios.get(url)
                return response.data.data; // Return the fetched user
            } catch (error) {
                console.error("Error fetching user by ID:", error.message);
            }
        }

    useEffect(() => {
        const fetchAllRecipes = async () => {
            try {
                const url = `${API_BASE}/api/recipes`
                const response = await axios.get(url)
                setRecipes(response.data.recipes)
                

            } catch (error) {
                console.error("Error Fetching data", error.message)
            }
        }
        fetchAllRecipes();
    }, [])

    const addRecipe = async (recipeData) => {
        try {
            const url = `${API_BASE}/api/recipes/create`
            const response = await axios.post(url, recipeData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            })
            setRecipes((prevRecipes) => [...prevRecipes, response.data.recipe])
            
        } catch (error) {
            console.error("Error adding recipe:", error.message);
            return null
        }
    }

    const getRecipeById =  async(id) => {
        try {
            const url = `${API_BASE}/api/recipes/${id}`
            const response = await axios.get(url)
            
            return response.data.recipe;
            // Return the fetched recipe
        } catch (error) {
            console.error("Error fetching recipe by ID:", error.message);
        }
    }

    const aiChat = async (foodName) => {
        try {
            const url = `${API_BASE}/api/ai-chat`
            const response = await axios.post(url, { foodName })
            
            return response.data.recipe; // Assuming the response contains a 'response' field with the AI's reply
        } catch (error) {
            console.error("Error in AI chat:", error.message);
        }
    }

    const login = async (email, password) => {
        try {
            const url = `${API_BASE}/api/users/login`
            const response = await axios.post(url, { email, password }, { withCredentials: true })
            
            setCurrentUser(response.data.data);
            localStorage.setItem("user", JSON.stringify(response.data.data));
            return response.data; // Assuming the response contains user data or a token
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    }

    const logout = async () => {
        try {
            const url = `${API_BASE}/api/users/logout`
            const response = await axios.post(url, {}, { withCredentials: true })
            
            setCurrentUser(null);
            localStorage.removeItem("user");
        } catch (error) {
            console.error("Error logging out:", error.message);
            setCurrentUser(null);
        }
    }

    const createUser = async (userData) => {
        try {
            const url = `${API_BASE}/api/users/register`
            const response = await axios.post(url, userData, { withCredentials: true })
            
            return response.data;
        } catch (error) {
            console.error("Error creating user:", error.message);
        }
    }

    return (
        <AppContext.Provider value={{ blogPosts, recipes, addRecipe, aiChat, login, currentUser, addBlog, fetchBlogById, getRecipeById, fetchUserById, logout, createUser }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;