import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "../../contexts/AppContext";
import { BiMenu } from "react-icons/bi";

const LandNav = () => {
	const { theme } = useApp();
	const [show, setShow] = useState(false);

	return (
		<div className="flex z-50 items-center shadow-sm bg-inherit sticky top-0 justify-between h-[60px] px-[3%]">
			<div className={`flex px-3 items-center`}>
				<img className={`w-[100px] flex`} src="logoq.png" alt="" />
			</div>
			<div
				onClick={() => setShow(!show)}
				className="flex flex-col z-50 gap-y-1 cursor-pointer"
			>
				<span
					className={`w-[25px] ${
						show && " rotate-45 translate-y-[3px]"
					} h-[0.1em] bg-black duration-300`}
				></span>
				<span
					className={`w-[20px] h-[0.1em]  bg-black duration-300 ${show && "hidden"}`}
				></span>
				<span
					className={`w-[25px] h-[0.1em] bg-black duration-300 ${
						show && " -rotate-45 -translate-y-[2.5px]"
					}`}
				></span>
				<span
					className={`w-[22px] ${show && "hidden"} h-[0.1em] bg-black duration-300`}
				></span>
			</div>
			<div
				className={`flex ltab:flex-row py-3 ltab:py-0 gap-y-4 items-center ltab:static absolute left-0 right-0 flex-col ${
					show ? "top-0" : "-top-[1000px]"
				} duration-500 bg-white backdrop-blur-lg bg-opacity-50`}
			>
				<Link href="/landing/#">
					<p onClick={()=> setShow(false)} className="ltab:ml-6 cursor-pointer">Home</p>
				</Link>
				<Link href="/landing/#features">
					<p onClick={()=> setShow(false)} className="ltab:ml-6 cursor-pointer">Features</p>
				</Link>
				<Link href="/landing/#blog">
					<p onClick={()=> setShow(false)} className="ltab:ml-6 cursor-pointer">Blog</p>
				</Link>
				<Link href="/landing/#about">
					<p onClick={()=> setShow(false)} className="ltab:ml-6 cursor-pointer">About Us</p>
				</Link>
				<Link href="/landing/#download">
					<button
					 onClick={()=> setShow(false)}	className={`px-4 py-2 ${theme.main} text-white rounded-3xl ltab:ml-6`}
					>
						Download
					</button>
				</Link>
			</div>
		</div>
	);
};

export default LandNav;
