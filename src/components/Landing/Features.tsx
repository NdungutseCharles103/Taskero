import React, { useState } from 'react'
import { useApp } from '../../contexts/AppContext'
import { AiFillPieChart,} from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight, BiRightArrowAlt, BiTime } from "react-icons/bi";

const Features = () => {
    const { theme } = useApp()
    const [ active, setActive ] = useState('connect')

    const features = [
        {
            id: 'connect',
            title: 'Connect with your team',
            desc: 'Taskero will help you to connect with your team and track your tasks easily',
            icon: <FaUserPlus className="text-4xl" />
        },
        {
            id: 'track',
            title: 'Track your tasks',
            desc: 'Taskero will help you to track your tasks and team tasks easily and shows you how you/your team are performing',
            icon: <AiFillPieChart className="text-4xl" />
        },
        {
            id: 'time',
            title: 'Save your time',
            desc: 'Taskero will help you to save your time and track your tasks easily',
            icon: <BiTime className="text-4xl" />
        },
        {
            id: 'simplify',
            title: 'Simplify your work',
            desc: 'Taskero will help you to simplify your work and track your tasks easily',
            icon: <AiFillPieChart className="text-4xl" />
        },
        {
            id: 'free',
            title: 'Free forever',
            desc: 'Taskero will help you to track your tasks and team tasks easily and shows you how you/your team are performing',
            icon: <AiFillPieChart className="text-4xl" />
        }
    ]

  return (
		<div id="features" className="mt-11 flex w-full flex-col">
			<h1 className="text-2xl font-bold text-center">
				Features that makes people loves us
				<span className={`${theme.tc}`}> loves us</span>
			</h1>
			<p className="text-center mt-3">
				We offer various features to you to increase your productivity so, you
				can get your task done and rest early
			</p>
			<div className="grid relative overflow-x-auto features grid-flow-col w-full mt-9 gap-x-3">
				<button className="absolute rounded-full -left-7 z-[99999]">
					<BiChevronLeft className="text-3xl" />
				</button>
				<button className="absolute rounded-full">
					<BiChevronRight className="text-3xl" />
				</button>
				{features.map((feature) => (
					<Feature key={feature.id} active={active === feature.id} {...feature} />
				))}
			</div>
		</div>
	);
}

export default Features

type FProps = {
    active: boolean;
    title: string;
    desc: string;
    icon: any;
}

const Feature: React.FC<FProps> = ({ active, title, desc, icon }) => {
    const { theme } = useApp();

    return (
			<div
				className={`flex ${
					active && "text-white"
				} flex-col rounded-3xl justify-between p-4 items-center ${
					active && theme.main
				} w-[300px] hover:bg-[#058179] hover:text-white duration-300 cursor-pointer`}
			>
				<div className="w-full flex flex-col">
					<div className="mx-auto">{icon}</div>
					<h1 className="text-lg font-bold text-center mt-2">{title}</h1>
				</div>
				<p className="text-center mt-2 text-sm">{desc}</p>
				<button
					className={`px-4 mt-2 py-2 bg-white ${theme.tc} overflow-hidden duration-300 btnstarted relative rounded-3xl ml-6 flex items-center
							`}
				>
					<span className="flex w-full h-full relative items-center z-[2] text-sm">
						Learn more <BiRightArrowAlt className="ml-2" />
					</span>
				</button>
			</div>
		);
}