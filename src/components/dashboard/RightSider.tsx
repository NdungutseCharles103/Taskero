import React, { useState } from "react";
import { useApp } from "../../contexts/AppContext";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const RightSider = () => {
	const { theme } = useApp();
	const [ shrink, setShrink ] = useState<boolean>(false);

	return (
		<div className={`flex h-full ${theme.bg1} duration-300`}>
			<div
				onClick={() => setShrink(!shrink)}
				className={`h-full cursor-pointer ${theme.bg} ${
					shrink ? "w-2" : "w-[0.4em]"
				} hover:bg-[#e2eeed] flex flex-col justify-center items-center`}
			>
				{shrink ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
			</div>
			<div
				className={`min-w-[400px] ${
					shrink ? "absolute top-0 duration-300 -right-full h-screen" : "h-full"
				} flex ${theme.bg1} flex-col`}
			></div>
		</div>
	);
};

export default RightSider;
