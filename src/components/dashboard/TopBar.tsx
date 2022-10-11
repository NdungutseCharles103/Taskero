import React from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { useApp } from "../../contexts/AppContext";

const TopBar = () => {
	const { theme } = useApp();
	return (
		<div className="flex items-center w-full justify-between">
			<p className="font-semibold">Feed</p>
			<div className="flex items-center">
				<div className={`flex items-center ${theme.bg} rounded-lg px-2 py-[0.4em]`}>
					<BiSearch />
					<input
						className=" bg-transparent w-full px-2 outline-none text-sm"
						type="text"
					/>
				</div>
				<button className={`p-2 ${theme.bg} rounded-full ml-2`}>
					<BiBell className="text-xl" />
				</button>
			</div>
		</div>
	);
};

export default TopBar;
