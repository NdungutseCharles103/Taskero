import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useApp } from '../../contexts/AppContext'
import TaskCard from './TaskCard'

const MainTasks = () => {
    const { theme } = useApp()

  return (
    <div className={`main grid ltab:grid-cols-3 five:grid-cols-2 gap-[3%] w-full ${theme.t1}`}>
        <TaskArea tasks={[2, 32]} name="To Do"  />
        <TaskArea tasks={[2, 32, 4, 4]} name="In Progress"  />
        <TaskArea tasks={[2, 32, 4]} name="In Review"  />
    </div>
  )
}

export default MainTasks

type AProps = {
    tasks: object[] | any[],
    name: string
}

const TaskArea = ({tasks, name}: AProps) => {
    const { theme } = useApp()

    return(
        <div className={`${theme.bg} gap-3 rounded-lg flex flex-col p-2`}>
            <div className="flex items-center justify-between">
                <p className='text-sm font-semibold'><span className={`${theme.text}`}>{name}</span>
                    <span className='ml-2'>{tasks.length}</span>
                </p>
                <div className="text-xl flex items-center">
                    <p className='cursor-pointer'>+</p>
                    <BiDotsHorizontalRounded className='ml-3 cursor-pointer' />
                </div>
            </div>
            {tasks.map((task: any, index: number)=> (
                <TaskCard />
            ))}
        </div>
    )
}