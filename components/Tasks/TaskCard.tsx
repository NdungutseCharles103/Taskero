import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDrag } from "react-dnd";
import { BiDotsHorizontalRounded, BiLink } from "react-icons/bi";
import { FaTag } from "react-icons/fa";
import { useApp } from "../../contexts/AppContext";

type Props = {
	task: any;
    index: number
};

const TaskCard = ({ task , index }: Props) => {
	const { theme } = useApp();
	return (
		<Draggable draggableId={task.id.toString()} index={index} >
            {(provided, snapshot)=> (
			<div
                ref={provided.innerRef}
                className={`${theme.bg1} ${
                    snapshot.isDragging && "bg-blue-600"
                } rounded-lg cursor-grab text-sm px-2 py-3 flex flex-col`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
			>
				<div className="flex items-center justify-between">
					<p className={`${theme.text} font-semibold`}>Layout Design</p>
					<BiDotsHorizontalRounded className="text-xl" />
				</div>
				<div className="flex items-center">
					<BiLink />
					<a href="/" rel="no-referrer" className="ml-2 cu underline">
						Document Link
					</a>
				</div>
				<div className="flexitems-center justify-between">
					<div className="flex cursor-default  items-center">
						<p className={`${theme.bg} p-1 rounded-md`}>Update</p>
						<p className={`${theme.bg} p-1 ml-3 rounded-md`}>Web</p>
					</div>
					<div className="flex cursor-default  items-center">
						<FaTag className="fill  rotate-[135deg] text-red-600" />
						<p className="ml-2">2 days left</p>
					</div>
				</div>
				<div className="flex items-center cursor-default">
					<img
						className="w-[30px] h-[30px] object-center border-2 object-cover rounded-full"
						src="/react.svg"
						alt=""
					/>
					<img
						className="w-[30px] -translate-x-2 h-[30px] object-center border-2 object-cover rounded-full"
						src="/react.svg"
						alt=""
					/>
					<img
						className="w-[30px] -translate-x-4 h-[30px] object-center border-2 object-cover rounded-full"
						src="/react.svg"
						alt=""
					/>
					<p className="w-[30px] -translate-x-6 h-[30px] text-green-600 flex bg-[#e2eeed] items-center  justify-center text-xs bg-[#e2eeed rounded-full">
						<span>+2</span>
					</p>
				</div>
			</div>
            )}
		</Draggable>
	);
};

export default TaskCard;
