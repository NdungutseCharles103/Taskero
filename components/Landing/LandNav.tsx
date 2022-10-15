import React from "react";
import Link from "next/link";
import { useApp } from "../../contexts/AppContext";

const LandNav = () => {
  const { theme } = useApp()
	return (
		<div className="flex items-center shadow-sm bg-inherit sticky top-0 justify-between h-[60px]">
			<div className={`flex px-3 items-center`}>
				<img className={`w-[100px] flex`} src="logoq.png" alt="" />
			</div>
			<div className="flex items-center">
				<Link href="/home">
					<p  className="ml-6" >Home</p>
				</Link>
				<Link href="/home">
					<p  className="ml-6" >Features</p>
				</Link>
				<Link href="/home">
					<p  className="ml-6" >Blog</p>
				</Link>
				<Link href="/home">
					<p  className="ml-6" >About Us</p>
				</Link>
				<button
					className={`px-4 py-2 ${theme.main} text-white rounded-3xl ml-6`}
				>
					Download
				</button>
			</div>
		</div>
	);
};

export default LandNav;
