import Head from "next/head";
import React from "react";

const MainLayout = ({ children } : { children: React.ReactNode}) => {
	return (
		<>
			<Head>
				<title>Taskero</title>
			</Head>
            {children}
		</>
	);
};

export default MainLayout;
