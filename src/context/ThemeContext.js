import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? "light" : "dark");
    }

    const value = {
        theme,
        toggleTheme
    }

    useEffect(() => {
      localStorage.setItem("theme",theme);
    }, [theme])
    

    return (<ThemeContext.Provider value={value}>
        {props.children}
    </ThemeContext.Provider>)
}

export default ThemeContext;