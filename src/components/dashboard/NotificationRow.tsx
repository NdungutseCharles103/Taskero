import React from 'react'
import { useApp } from '../../contexts/AppContext'

const NotificationRow = () => {
    const {theme} = useApp()
  return (
    <div className={`${theme.bg1} w-full flex-col flex p-2 rounded-md`}>
        <p className='text-sm font-semibold'>Welcome to Taskero</p>
        <p className="text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, ipsum sit! Ea magni exercitationem neque consequatur optio qui autem, error labore ullam molestiae id voluptates accusantium facilis blanditiis provident tempora?
        </p>
        <div className="flex justify-end w-full">
            <button
            className={`${theme.tc} text-xs`}
            >Mark As read</button>
        </div>
    </div>
  )
}

export default NotificationRow