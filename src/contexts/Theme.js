import React from 'react'
import  {createContext,useContext} from 'react'


export  const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},

})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
} // can use this method as well by creating a custom hook to get the provider so that we dont have to import multiple thing jsut have to call this hook