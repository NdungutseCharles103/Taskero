export type Theme = {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
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
        quaternary: "#f2f2f2",
        quinary: "#f2f2f2",
        senary: "#f2f2f2",
        septenary: "#f2f2f2",
    },
    lightTheme: {
        primary: "#f2f2f2",
        secondary: "#1e1e1e",
        tertiary: "#1e1e1e",
        quaternary: "#1e1e1e",
        quinary: "#1e1e1e",
        senary: "#1e1e1e",
        septenary: "#1e1e1e",
    },
    theme: {
        primary: "",
        secondary: "",
        tertiary: "",
        quaternary: "",
        quinary: "",
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