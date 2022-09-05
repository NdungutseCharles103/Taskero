import React from 'react'
import { BiCaretDown, BiChevronDown, BiSearch } from 'react-icons/bi';
import { useApp } from '../../contexts/AppContext'

const MainTaskComp = () => {
    const { theme } = useApp();
  return (
    <div className='flex flex-col w-full'>
        <div className="flex items-center justify-between">
            <h1 className='font-semibold'>Team tasks</h1>
            <div className="text-sm flex items-center">
                <div className={`${theme.bg} rounded-md py-2 px-3 flex items-center`}>
                    <BiSearch />
                    <input className='outline-none ml-2 bg-transparent' placeholder='Search' type="text" />
                </div>
                <button className={`flex text-white items-center py-1 rounded-lg ml-4 px-4 ${theme.main}`}>
                    <span className='text-lg'>+</span>
                    <span className='ml-1'>Create task</span>
                </button>
            </div>
        </div>
        <div className={`sorts ${theme.t1} text-sm flex w-full items-center justify-between`}>
            <div className="flex items-center">
                <p className={`rotate-90 ${theme.text} text-3xl`}>&#8227;</p>
                <p className='ml-3'>Filter</p>
                <BiChevronDown className='ml-3' />
            </div>
        </div>
    </div>
  )
}

export default MainTaskComp