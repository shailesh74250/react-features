import React, { createContext, useContext, useState, useEffect } from 'react';

// themes
const themes = {
    light: {
        background: "#ffffff",
        color: "#2e2f30",
    },
    dark: {
        background: "#2e2f30",
        color: "#ffffff",
    },
};

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setTheme(JSON.parse(savedTheme));
        }
    }, []);

    const toggleTheme = () => {
        const themeValue = theme === themes.light ? themes.dark : themes.light;
        setTheme(themeValue);
        localStorage.setItem("theme", JSON.stringify(themeValue));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// custom hook to use theme value and toggle method
export const useTheme = () => useContext(ThemeContext);

