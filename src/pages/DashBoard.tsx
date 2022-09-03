import React from 'react'
import SideBar from '../components/constants/SideBar'
import { useApp } from '../contexts/AppContext'

const DashBoard = () => {
  const { theme } = useApp()
  return (
    <div className={`h-screen flex p-2 ${theme.bg} text-[${theme.text}]`}>
      <SideBar />
    </div>
  )
}

export default DashBoard