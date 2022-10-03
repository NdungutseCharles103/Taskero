import { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useDrop } from "react-dnd";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useApp } from "../../contexts/AppContext";
import TaskCard from "./TaskCard";

type AProps = {
	tasks: object[] | any[];
	name: string;
	dropRef?: any;
	handleDrop: any;
    prefix: string;
};

const TaskArea = ({ tasks, name, dropRef, handleDrop, prefix }: AProps) => {
	const { theme } = useApp();
    
	useEffect(() => {
		console.log(tasks);
	}, [tasks]);

	return (
		<Droppable droppableId={prefix}>
            {(provided, snapshot)=>(
			<div
				ref={provided.innerRef}
				className={`${theme.bg} ${
					snapshot.isDraggingOver && "bg-[#e2eeed]"
				} gap-3 h-fi rounded-lg flex flex-col p-2`}
                {...provided.droppableProps}
			>
				<div className="flex items-center justify-between">
					<p className="text-sm font-semibold">
						<span className={`${theme.text}`}>{name}</span>
						<span className="ml-2">{tasks.length}</span>
					</p>
					<div className="text-xl flex items-center">
						<p className="cursor-pointer">+</p>
						<BiDotsHorizontalRounded className="ml-3 cursor-pointer" />
					</div>
				</div>
				{tasks.map((task: any, i: number) => (
					<TaskCard key={i} task={task} index={i} />
				))}
                {provided.placeholder}
			</div>
            )}
		</Droppable>
	);
};

export default TaskArea;
