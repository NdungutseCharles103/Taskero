import Head from "next/head";
import React from "react";

export type LayoutProps = {
	children: React.ReactNode;
	title?: string;
}

const MainLayout = ({ children, title } : LayoutProps) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/ico.png" type="image/x-icon" />
				<title>{title??'Taskero'}</title>
			</Head>
            {children}
		</>
	);
};

export default MainLayout;
