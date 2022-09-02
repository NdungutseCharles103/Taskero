import React from 'react'
import { useApp } from '../../contexts/AppContext'
import { BiTask } from 'react-icons/bi'

const SideBar = () => {
    const { theme } = useApp()
    
  return (
    <div className={`text-[${theme.text}] bg-[${theme.primary}] justify-between flex flex-col`} >
        <div className="flex flex-col">
            <div className="flex items-center">
                <BiTask className={`text-3xl text-[${theme.tertiary}]`} />
                <p className="text-2xl font-bold ml-2">taskero</p>
            </div>
        </div>
        <div className="flex flex-col"></div>
    </div>
  )
}

export default SideBar