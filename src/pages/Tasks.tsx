import React from "react";
import SideBar from "../components/constants/SideBar";
import MainTaskComp from "../components/Tasks/MainTaskComp";
import { useApp } from "../contexts/AppContext";

const Tasks = () => {
	const { theme } = useApp();

	return (
		<div className={`h-screen flex py-3 pr-3 ${theme.bg} text-[${theme.text}]`}>
			<SideBar active="tasks" />
			<div className={`flex h-full overflow-auto w-full rounded-lg pb-3 flex-col px-2 ${theme.bg1}`}>
				<MainTaskComp />
			</div>
		</div>
	);
};

export default Tasks;
