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
				<title>{title??'Taskero'}</title>
			</Head>
            {children}
		</>
	);
};

export default MainLayout;
