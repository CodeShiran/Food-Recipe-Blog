import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext();


const ContextProvider = ({children}) => {

    const [blogPosts, setBlogPosts] = useState([]);

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

    

    return (
        <AppContext.Provider value={{blogPosts}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;