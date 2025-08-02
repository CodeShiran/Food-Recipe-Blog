import { createContext } from "react";

export const AppContext = createContext();

const contextProvider = ({children}) => {

    const fetchAllPosts = async () => {
        try {
            const url = ''
        } catch (error) {
            console.error("Error fetching posts:", error.message);
        }
    }

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default contextProvider;