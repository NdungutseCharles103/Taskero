import React from "react";
import SideBar from "../components/constants/SideBar";
import { useApp } from "../contexts/AppContext";

const Tasks = () => {
	const { theme } = useApp();

	return (
		<div className={`h-screen flex py-3 pr-3 ${theme.bg} text-[${theme.text}]`}>
			<SideBar />
			<div className={`flex w-full rounded-lg py-3 flex-col px-2 ${theme.bg1}`}>
				<h1 className="font-semibold">Team Tasks</h1>
			</div>
		</div>
	);
};

export default Tasks;
