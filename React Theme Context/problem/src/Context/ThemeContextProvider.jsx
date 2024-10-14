import React from 'react'
import App from '../App'
import { useState,createContext } from 'react'
import User from '../Components/User';


export const AppContext = createContext();

export default function ThemeContextProvider({children}) {
  const [dark,setDark] = useState(false);
  return (
     <AppContext.Provider value = {
      {
        isDarkTheme:dark,
        setDark:(e)=>setDark(e)
      }
     }>{children}</AppContext.Provider>
  )
}
