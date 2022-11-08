import React, { SetStateAction } from 'react'
import { BiX } from 'react-icons/bi'
import { useApp } from '../../contexts/AppContext'
import NotificationRow from './NotificationRow';

type Props = {
	setShowNotifications: React.Dispatch<SetStateAction<boolean>>;
	showNotifications: boolean;
};

const Notifications = ({ setShowNotifications, showNotifications }: Props) => {
    const {theme} = useApp()
  return (
		<div
			className={`fixed ${
				showNotifications ? "left-0 right-0" : "-right-[1000px]"
			}
         top-0 duration-500 bottom-0 z-50 flex justify-end  bg-black/30`}
		>
			<div
				onClick={() => setShowNotifications(false)}
				className="absolute  top-0 left-0 bottom-0 right-0"
			></div>
			<div className={`w-[400px] ${theme.bg} h-full rounded-tl-[2em] p-3 z-10`}>
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-bold">Notifications</h2>
					<BiX
						onClick={() => setShowNotifications(false)}
						size={30}
						className=" cursor-pointer"
					/>
				</div>
				<div className="mt-4 w-full flex justify-end">
					<button className={`text-xs ${theme.tc}`}>Mark all as read</button>
				</div>
				<div className="flex flex-col w-full overflow-auto h-[90vh]">
					<p className="mt-4 text-sm font-semibold">Today</p>
					<div className="flex w-full flex-col mt-4 gap-y-2">
						<NotificationRow />
						<NotificationRow />
						{/* <NotificationRow />
						<NotificationRow />
						<NotificationRow />
						<NotificationRow />
						<NotificationRow />
						<NotificationRow /> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Notifications