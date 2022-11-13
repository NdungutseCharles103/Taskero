import { useRouter } from "next/router";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { useSelector } from "react-redux";
import { allowedPaths } from "../components/utils";
import { appContextType, appDefaultValues, Theme } from "./types";

const AppContext = createContext<appContextType>(appDefaultValues);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [isDark, setIsDark] = useState(false);
	const [darkTheme, setDarkTheme] = useState(appDefaultValues.darkTheme);
	const [lightTheme, setLightTheme] = useState(appDefaultValues.lightTheme);
	const [theme, setTheme] = useState<Theme>(lightTheme);
	const [show, setShow] = useState(false);
	const { user } = useSelector((state: any) => state.user);
	const router = useRouter();

	const toggleTheme = () => {
		setIsDark(!isDark);
		setTheme(isDark ? lightTheme : darkTheme);
	};

	useEffect(() => {
		setTheme(isDark ? darkTheme : lightTheme);
	}, [isDark]);

	useEffect(() => {
        if (user && (router.pathname === "/auth/login" || router.pathname === "/auth/register")) {
            router.push("/dashboard");
        } else{
            if (!user && !allowedPaths.includes(router.pathname)) {
                router.push("/");
            } 
        }
    }, [user]);

	return (
		<AppContext.Provider
			value={{
				theme,
				toggleTheme,
				show,
				setShow,
				isDark,
				setIsDark,
				setTheme,
				setDarkTheme,
				setLightTheme,
				darkTheme,
				lightTheme,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
