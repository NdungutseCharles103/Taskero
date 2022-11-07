import React from "react";
import {
	BiArrowFromRight,
	BiArrowToLeft,
	BiRightArrow,
	BiRightArrowAlt,
} from "react-icons/bi";
import { usedBy } from "../../components/constants/data";
import About from "../../components/Landing/About";
import Blog from "../../components/Landing/Blog";
import Download from "../../components/Landing/Download";
import Features from "../../components/Landing/Features";
import Footer from "../../components/Landing/Footer";
import LandLayout from "../../components/Landing/LandLayout";
import LandNav from "../../components/Landing/LandNav";
import { useApp } from "../../contexts/AppContext";

const Landing = () => {
	const { theme } = useApp();
	return (
		<LandLayout>
			<div className="flex bg flex-col w-full items-center  px-[3%]">
				<div className="flex w-full items-center pt-[15vh] xtab:flex-row flex-col">
					<div className="xtab:w-1/2 flex px-5">
						<p className="xtab:text-[3.5em] text-4xl font-bold text-center xtab:text-start ltab:leading-[1.3em] leading-[1em]">
							Manage your own and team task easily with
							<span className={`${theme.tc}`}>Taskero</span>
						</p>
					</div>
					<div className="flex flex-col xtab:w-1/2">
						<p className="xtab:text-3xl text-xl leading-[1.5em] xtab:mt-0 mt-5">
							Taskero will help to track your tasks and team tasks easily and
							shows you how you/your team are performing
						</p>
						<div className="flex items-center phone:flex-row flex-col mt-4 xtab:justify-start justify-center w-full">
							<button
								className={`px-4 py-2 ${theme.main} relative btnstarted text-white rounded-3xl ml-2 overflow-hidden`}
							>
								<span className="flex w-full h-full relative items-center z-[2]">
									Get Started
								</span>
							</button>
							<button
								className={`px-4 py-2 ${theme.tc} phone:mt-0 mt-4 overflow-hidden duration-300 btnstarted relative rounded-3xl phone:ml-6 flex items-center
							`}
							>
								<span className="flex w-full h-full relative items-center z-[2]">
									Learn more <BiRightArrowAlt className="ml-2" />
								</span>
							</button>
						</div>
					</div>
				</div>
				<div
					className={`flex text-white ${theme.main} rounded-xl w-full relative mt-[20vh] p-11`}
				>
					<div className="flex flex-col w-1/2">
						<p className="text-lg">Used by over 10,000 people and teams</p>
						<div className="grid grid-cols-3 gap-3 mt-11 gap-y-11">
							{usedBy.map((use: any) => (
								<img className="max-w-[100px]" src={use.image} alt="" />
							))}
						</div>
					</div>
					<img
						className="w-[300px] tab:w-[600px] absolute right-0 bottom-0"
						src="/images/takphone.png"
						alt=""
					/>
				</div>
				<Features />
				<Blog />
				<About />
				<Download />
			</div>
			<Footer />
		</LandLayout>
	);
};

export default Landing;
