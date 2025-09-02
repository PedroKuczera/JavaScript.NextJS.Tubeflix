'use client'
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [ themeLight, setThemeLight ] = useState(() => {
        const themeName =
<<<<<<< HEAD
        localStorage.getItem('theme') ??
        document.documentElement.getAttribute('data-theme') ??
=======
        localStorage.getItem('theme') ||
        document.documentElement.getAttribute('data-theme') ||
>>>>>>> e2fdc6c9e90c224f4b9910e2d1d177e91c5668c8
        'dark'
    return themeName === 'light'
    })

    useEffect(() => {
        const themeName = themeLight ? 'light' : 'dark'
        localStorage.setItem('theme', themeName)
        document.documentElement.setAttribute('data-theme',themeName)
    }, [themeLight])

    return (
        <ThemeContext.Provider value={{themeLight, setThemeLight}}>
            {children}     
        </ThemeContext.Provider>
    )
}