import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext();


const ContextProvider = ({children}) => {

    const [blogPosts, setBlogPosts] = useState([]);
    const [recipes, setRecipes] = useState([])

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

    

    return (
        <AppContext.Provider value={{blogPosts, recipes, addRecipe}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;