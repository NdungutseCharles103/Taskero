import React from 'react'
import SideBar from '../components/constants/SideBar'
import { useApp } from '../contexts/AppContext'

const DashBoard = () => {
  const { theme } = useApp()
  return (
    <div className={`h-screen flex py-4 pr-3 ${theme.bg} text-[${theme.text}]`}>
      <SideBar active='dashboard' />
      <div className="flex w-full rounded-lg py-3 flex-col px-2">
        <h1>Team Tasks</h1>
      </div>
    </div>
  )
}

export default DashBoard