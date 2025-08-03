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

    

    return (
        <AppContext.Provider value={{blogPosts, recipes}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;