import React from 'react'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import { useApp } from '../../contexts/AppContext'
import ProjectGroup from './ProjectGroup'

const ProjectsBar = () => {
    const { theme } = useApp()
  return (
		<div
			className={`min-w-[150px] w-[200px] h-full max-w-[600px] flex justify-between flex-col px-1 resize-x py-3 ${theme.bg1}`}
		>
			<div className="flex flex-col w-full">
				<div
					className={`flex w-full items-center ${theme.bg} px-2 py-1 rounded-2xl`}
				>
					<BiSearch />
					<input
						className="w-full bg-transparent ml-2 outline-none text-sm"
						type="text"
						placeholder="Search"
					/>
				</div>
				<ProjectGroup />
			</div>
			<div
				className={`${theme.bg} duration-300 px-4 py-2 rounded-md text-sm font-semibold items-center justify-center flex cursor-pointer hover:bg-[#e2eeed]`}
			>
				+ New Project
			</div>
		</div>
	);
}

export default ProjectsBar