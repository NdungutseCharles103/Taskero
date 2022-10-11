import React from 'react'
import SideBar from '../components/constants/SideBar'
import MainFeed from '../components/dashboard/MainFeed'
import ProjectsBar from '../components/dashboard/ProjectsBar'
import RightSider from '../components/dashboard/RightSider'
import TopBar from '../components/dashboard/TopBar'
import { useApp } from '../contexts/AppContext'

const DashBoard = () => {
  const { theme } = useApp()
  return (
		<div
			className={`h-screen flex ${theme.bg} text-[${theme.text}] overflow-hidden w-full`}
		>
			<SideBar active="dashboard" />
			<ProjectsBar />
			<div className="flex w-full">
				<div className={`flex ${theme.bg1} ml-1 w-full rounded-lg py-3 flex-col px-2`}>
					<TopBar />
					<MainFeed />
				</div>
				<RightSider />
			</div>
		</div>
	);
}

export default DashBoard