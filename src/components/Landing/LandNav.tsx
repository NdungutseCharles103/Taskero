import React from "react";
import Link from "next/link";
import { useApp } from "../../contexts/AppContext";

const LandNav = () => {
  const { theme } = useApp()
	return (
		<div className="flex z-50 items-center shadow-sm bg-inherit sticky top-0 justify-between h-[60px] px-[3%]">
			<div className={`flex px-3 items-center`}>
				<img className={`w-[100px] flex`} src="logoq.png" alt="" />
			</div>
			<div className="flex items-center">
				<Link href="/landing/#">
					<p className="ml-6 cursor-pointer">Home</p>
				</Link>
				<Link href="/landing/#features">
					<p className="ml-6 cursor-pointer">Features</p>
				</Link>
				<Link href="/landing/#blog">
					<p className="ml-6 cursor-pointer">Blog</p>
				</Link>
				<Link href="/landing/#about">
					<p className="ml-6 cursor-pointer">About Us</p>
				</Link>
				<Link href="/landing/#download">
					<button
						className={`px-4 py-2 ${theme.main} text-white rounded-3xl ml-6`}
					>
						Download
					</button>
				</Link>
			</div>
		</div>
	);
};

export default LandNav;
