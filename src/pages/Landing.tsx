import React from "react";
import {
	BiArrowFromRight,
	BiArrowToLeft,
	BiRightArrow,
	BiRightArrowAlt,
} from "react-icons/bi";
import LandLayout from "../components/Landing/LandLayout";
import LandNav from "../components/Landing/LandNav";
import { useApp } from "../contexts/AppContext";
import phones from "../assets/takphone.png";

const Landing = () => {
	const { theme } = useApp();
	return (
		<LandLayout>
			<div className="flex w-full items-center pt-[15vh]">
				<div className="w-1/2 flex px-5">
					<p className="text-[3.5em] font-bold">
						Manage your own and team task easily with{" "}
						<span className={`${theme.tc}`}>Taskero</span>{" "}
					</p>
				</div>
				<div className="flex flex-col w-1/2">
					<p className="text-3xl leading-[1.5em]">
						Taskero will help to track your tasks and team tasks easily and
						shows you how you/your team are performing
					</p>
					<div className="flex items-center mt-4">
						<button
							className={`px-4 py-2 ${theme.main} relative btnstarted text-white rounded-3xl ml-6 overflow-hidden`}
						>
							<span className="flex w-full h-full relative items-center z-[2]">
								Get Started
							</span>
						</button>
						<button
							className={`px-4 py-2 ${theme.tc} overflow-hidden duration-300 btnstarted relative rounded-3xl ml-6 flex items-center
							`}
						>
							<span className="flex w-full h-full relative items-center z-[2]">
								Learn more <BiRightArrowAlt className="ml-2" />
							</span>
						</button>
					</div>
				</div>
			</div>
			<img src={phones} alt="" />
		</LandLayout>
	);
};

export default Landing;
