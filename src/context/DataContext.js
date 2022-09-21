import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) =>{

    const [isAuth, setIsAuth] = useState(false)

    return(
        <DataContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            {children}
        </DataContext.Provider>
    )
}