import React from "react";
import { useApp } from "../../contexts/AppContext";
import MainLayout from "../constants/MainLayout";
import LandNav from "./LandNav";

const LandLayout: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
	const { theme } = useApp();
	return (
		<MainLayout>
			<div
				className={`flex w-full min-h-screen flex-col bg-[#f6fafe] ${theme.text} px-[3%]`}
			>
				<LandNav />
				{children}
			</div>
		</MainLayout>
	);
};

export default LandLayout;
