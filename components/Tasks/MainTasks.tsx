import React, { useEffect, useMemo, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useApp } from "../../contexts/AppContext";
import { activities } from "../constants/data";
import { addToList, removeFromList, taskTypes } from "../utils";
import TaskArea from "./TaskArea";

const MainTasks = () => {
	const { theme } = useApp();
	const [tasks, setTasks] = useState<any>({
		tobedone: [],
		inprogress: [],
		done: [],
	});
	const [isBrowser, setIsBrowser] = useState(false);

	const handleDrop = function (result: DropResult) {
		console.log(result);
		const {
			destination,
			source: { droppableId, index },
		} = result;
		if (!destination) {
			return;
		}

		const listCopy = { ...tasks };

		const sourceList = listCopy[droppableId];
		const [removedElement, newSourceList] = removeFromList(sourceList, index);
		listCopy[result.source.droppableId] = newSourceList;

		const destinationList = listCopy[destination.droppableId];
		removedElement.state = destination.droppableId;

		listCopy[destination.droppableId] = addToList(
			destinationList,
			removedElement
		);

		setTasks(listCopy);
	};

	useMemo(() => {
		const toBeDone = activities.filter((act: any) => act.state === "tobedone");
		const done = activities.filter((act: any) => act.state === "done");
		const inProgress = activities.filter(
			(act: any) => act.state === "inprogress"
		);
		const tasks = { tobedone: toBeDone, inprogress: inProgress, done: done };
		setTasks(tasks);
		console.log(tasks);
	}, []);

	useEffect(() => {
		setIsBrowser(process.browser);
	}, []);

	return (
		<>
			{isBrowser ? (
				<DragDropContext onDragEnd={handleDrop}>
					<div
						className={`main grid ltab:grid-cols-3 five:grid-cols-2 gap-[3%] w-full ${theme.t1}`}
					>
						{taskTypes.map((type: any, i: number) => (
							<TaskArea
								key={i}
								handleDrop={handleDrop}
								tasks={tasks[type.sort]}
								name={type.name}
								prefix={type.sort}
							/>
						))}
					</div>
				</DragDropContext>
			) : null}
		</>
	);
};

export default MainTasks;
