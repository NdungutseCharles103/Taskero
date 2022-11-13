import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { AppProvider } from "../contexts/AppContext";
import store from "../contexts/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<AppProvider>
					<Component {...pageProps} />
				</AppProvider>
			</Provider>
		</>
	);
}

export default MyApp;
