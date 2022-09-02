export type Theme = {
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
    t1: string;
    senary: string;
    septenary: string;
}

export interface appContextType {
    isDark: boolean;
    toggleTheme: () => void;
    setIsDark: (isDark: boolean) => void;
    darkTheme: Theme;
    lightTheme: Theme;
    theme: Theme;
    setTheme: (theme: Theme) => void;
    setDarkTheme: (theme: Theme) => void;
    setLightTheme: (theme: Theme) => void;
}

export const appDefaultValues: appContextType = {
    isDark: false,
    toggleTheme: () => { },
    setIsDark: () => { },
    darkTheme: {
        primary: "#1e1e1e",
        secondary: "#f2f2f2",
        tertiary: "#f2f2f2",
        text: "#ffffff",
        t1: "#6e757c",
        senary: "#f2f2f2",
        septenary: "#f2f2f2",
    },
    lightTheme: {
        primary: "#f7f7f7",
        secondary: "#ffffff",
        tertiary: "#058179",
        text: "#000",
        t1: "#6e757c",
        senary: "#1e1e1e",
        septenary: "#1e1e1e",
    },
    theme: {
        primary: "",
        secondary: "",
        tertiary: "",
        text: "",
        t1: "",
        senary: "",
        septenary: ""
    },
    setTheme: function (theme: Theme): void {
        throw new Error("Function not implemented.");
    },
    setDarkTheme: function (theme: Theme): void {
        throw new Error("Function not implemented.");
    },
    setLightTheme: function (theme: Theme): void {
        throw new Error("Function not implemented.");
    }
}