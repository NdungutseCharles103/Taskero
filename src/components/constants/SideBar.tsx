import React from 'react'
import { useApp } from '../../contexts/AppContext'
import { BiAnalyse, BiInfoCircle, BiLogOut, BiTask } from 'react-icons/bi'

const SideBar = () => {
    const { theme } = useApp()
    
  return (
    <div className={`${theme.t1} ${theme.bg} justify-between flex flex-col`} >
        <div className="flex flex-col">
            <div className="flex items-center">
              <img className='w-[100px]' src="src/assets/logoq.png" alt="" />
            </div>
            <div className="flex flex-col">
              <div className="flex mt-3 justify-between items-center">
                <div className="flex items-center">
                  <BiAnalyse className='text-lg' />
                  <p className="ml-2">Activity</p>
                </div>
              </div>
            </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-3 items-center">
            <BiInfoCircle className='text-lg' />
            <p className="ml-2">Help Center</p>
          </div>
          <div className="flex mt-3 items-center">
            <BiLogOut className='text-lg' />
            <p className="ml-2">Help Center</p>
          </div>
        </div>
    </div>
  )
}

export default SideBar