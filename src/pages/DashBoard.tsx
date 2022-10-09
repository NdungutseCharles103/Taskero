import React from 'react'
import SideBar from '../components/constants/SideBar'
import ProjectsBar from '../components/dashboard/ProjectsBar'
import { useApp } from '../contexts/AppContext'

const DashBoard = () => {
  const { theme } = useApp()
  return (
    <div className={`h-screen flex ${theme.bg} text-[${theme.text}]`}>
      <SideBar active='dashboard' />
      <ProjectsBar />
      <div className={`flex ${theme.bg1} ml-1 w-full rounded-lg py-3 flex-col px-2`}>
        
      </div>
    </div>
  )
}

export default DashBoard