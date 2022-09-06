import React from 'react'
import { BiCaretDown, BiChevronDown, BiSearch } from 'react-icons/bi';
import { useApp } from '../../contexts/AppContext'
import MainTasks from './MainTasks';

const MainTaskComp = () => {
    const { theme } = useApp();
  return (
    <div className='flex flex-col bg-inherit w-full'>
        <div className="flex z-[5] five:sticky top-0 pt-3 bg-inherit items-center five:flex-row flex-col justify-between">
            <h1 className='font-semibold'>Team tasks</h1>
            <div className="text-sm five:flex-row flex-col flex items-center">
                <div className={`${theme.bg} rounded-md py-2 px-3 flex items-center`}>
                    <BiSearch />
                    <input className='outline-none min-w- ml-2 bg-transparent' placeholder='Search' type="text" />
                </div>
                <button className={`flex mx-auto five:mt-0 mt-2  text-white items-center py-1 rounded-lg five:ml-4 px-4 ${theme.main}`}>
                    <span className='text-lg'>+</span>
                    <span className='ml-1'>Create task</span>
                </button>
            </div>
        </div>
        <div className={`sorts ${theme.t1} text-sm flex w-full items-center justify-between`}>
            <div className="flex items-center">
                <p className={`rotate-90 ${theme.text} text-3xl`}>&#8227;</p>
                <p className='ml-3'>Filter</p>
                <BiChevronDown className='ml-2' />
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <p>Sort by</p>
                    <BiChevronDown className='ml-2' />
                </div>
                <div className="flex ml-4 items-center">
                    <p>Group by:</p>
                    <p className={`${theme.text} ml-1`}>Status</p>
                    <BiChevronDown className='ml-2' />
                </div>
            </div>
        </div>
        <MainTasks />
    </div>
  )
}

export default MainTaskComp