import { AnyArray } from 'immer/dist/internal'
import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useApp } from '../../contexts/AppContext'
import { activities } from '../constants/data'
import TaskCard from './TaskCard'

const MainTasks = () => {
    const { theme } = useApp()
    const [ toBeDone, setToBeDone] = useState<any>([])
    const [ inProgress, setInProgress ] = useState<any>([])
    const [ inReview, setInReview ] = useState<any>([])

    useEffect(()=>{
        console.log(toBeDone);
    },[toBeDone])

    const handleDrop = (task: any)=> {
        switch (task.state) {
            case "tobedone":
                const filtered = toBeDone.filter((tobe: any)=> tobe.id !== task.id)
                setToBeDone(filtered)
                break;
            case "inreview":
                setInReview(inReview.filter((tobe: any)=> tobe.id !== task.id))
                break;
            case "inprogress":
                setInProgress(inProgress.filter((tobe: any)=> tobe.id !== task.id))
                break;
        
            default:
                break;
        }
        const filtered = toBeDone.filter((tobe: any)=> tobe.id !== task.id)
        const arr = Object.assign(toBeDone, filtered)
        console.log(arr, filtered);
    }

   useEffect(() => {
    const toBeDone = activities.filter((act: any)=> act.state === 'tobedone')
    const inReview = activities.filter((act: any)=> act.state === 'inreview')
    const inProgress = activities.filter((act: any)=> act.state === 'inprogress')

    setToBeDone(toBeDone);
    setInProgress(inProgress);
    setInReview(inReview)
   }, [])
    

  return (
    <div className={`main grid ltab:grid-cols-3 five:grid-cols-2 gap-[3%] w-full ${theme.t1}`}>
        <TaskArea handleDrop={handleDrop} tasks={toBeDone} name="To Do"  />
        <TaskArea handleDrop={handleDrop} tasks={inProgress} name="In Progress"  />
        <TaskArea handleDrop={handleDrop} tasks={inReview} name="In Review"  />
    </div>
  )
}

export default MainTasks

type AProps = {
    tasks: object[] | any[],
    name: string,
    dropRef?: any,
    handleDrop: any
}

const TaskArea = ({tasks, name, dropRef, handleDrop}: AProps) => {
    const { theme } = useApp()
    
    const [{ isOver }, drop] = useDrop(()=> ({
        accept: "task",
        drop: (task: any) => {
          handleDrop(task)  
        },
        collect: (monitor)=> ({
            isOver: !!monitor.isOver()
        })
    }))

    return(
        <div ref={drop} className={`${theme.bg} ${isOver && 'bg-[#e2eeed]'} gap-3 h-fi rounded-lg flex flex-col p-2`}>
            <div className="flex items-center justify-between">
                <p className='text-sm font-semibold'><span className={`${theme.text}`}>{name}</span>
                    <span className='ml-2'>{tasks.length}</span>
                </p>
                <div className="text-xl flex items-center">
                    <p className='cursor-pointer'>+</p>
                    <BiDotsHorizontalRounded className='ml-3 cursor-pointer' />
                </div>
            </div>
            {tasks.map((task: any, i: number)=> (
                <TaskCard key={i} task={task} />
            ))}
        </div>
    )
}