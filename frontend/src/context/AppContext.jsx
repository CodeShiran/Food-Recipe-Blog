import { createContext } from "react";

export const AppContext = createContext();

const contextProvider = ({children}) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default contextProvider;