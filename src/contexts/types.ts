export type Theme = {
    bg: string;
    bg1: string;
    main: string;
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
        bg: "#1e1e1e",
        bg1: "#f2f2f2",
        main: "#f2f2f2",
        text: "#ffffff",
        t1: "#6e757c",
        senary: "#f2f2f2",
        septenary: "#f2f2f2",
    },
    lightTheme: {
        bg: "bg-[#f7f7f7]",
        bg1: "bg-[#ffffff]",
        main: "#058179",
        text: "text-[#000]",
        t1: "text-[#6e757c]",
        senary: "#1e1e1e",
        septenary: "#1e1e1e",
    },
    theme: {
        bg: "",
        bg1: "",
        main: "",
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