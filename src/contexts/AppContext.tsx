import { createContext, ReactNode, useContext, useState } from "react";
import { appContextType, appDefaultValues, Theme } from "./types";

const AppContext = createContext<appContextType>(appDefaultValues);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }:{ children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);
    const [darkTheme, setDarkTheme] = useState(appDefaultValues.darkTheme);
    const [lightTheme, setLightTheme] = useState(appDefaultValues.lightTheme);
    const [theme, setTheme] = useState<Theme>(lightTheme);

    const toggleTheme = () => {
        setIsDark(!isDark);
        setTheme(isDark ? lightTheme : darkTheme);
    }

    return (
        <AppContext.Provider value={{ theme, toggleTheme, isDark, setIsDark, setTheme, setDarkTheme, setLightTheme, darkTheme, lightTheme }}>
            {children}
        </AppContext.Provider>
    );
}