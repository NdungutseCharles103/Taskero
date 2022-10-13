import React from "react";
import { useApp } from "../../contexts/AppContext";
import LandNav from "./LandNav";

const LandLayout: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
	const { theme } = useApp();
	return (
		<div
			className={`flex w-full min-h-screen flex-col bg-[#f6fafe] ${theme.text} px-[3%]`}
		>
			<LandNav />
            { children }
		</div>
	);
};

export default LandLayout;
