import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { projects } from "../constants/data";

const ProjectGroup = () => {
	const [expand, setExpand] = useState(false);
	return (
		<div className="mt-4 flex w-full flex-col">
			<div
				onClick={() => setExpand(!expand)}
				className="flex w-full items-center  cursor-pointer"
			>
				{expand ? <BiChevronUp /> : <BiChevronDown />}
				<h4 className="text-xs uppercase ml-2">Projects</h4>
			</div>
			{expand &&
				projects.map((project) => (
					<div className="flex flex-col w-full cursor-pointer">
						<div className="flex w-full items-center mt-2 ml-3">
							<div className="w-2 h-2 rounded-full bg-red-500"></div>
							<h1 className="text-sm ml-2">Project 1</h1>
						</div>
					</div>
				))}
		</div>
	);
};

export default ProjectGroup;
