import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoq.png";
import { useApp } from "../../contexts/AppContext";

const LandNav = () => {
  const { theme } = useApp()
	return (
		<div className="flex items-center shadow-sm bg-inherit sticky top-0 justify-between h-[60px]">
			<div className={`flex px-3 items-center`}>
				<img className={`w-[100px] flex`} src={logo} alt="" />
			</div>
			<div className="flex items-center">
				<Link className="ml-6" to="/home">
					<p>Home</p>
				</Link>
				<Link className="ml-6" to="/home">
					<p>Features</p>
				</Link>
				<Link className="ml-6" to="/home">
					<p>Blog</p>
				</Link>
				<Link className="ml-6" to="/home">
					<p>About Us</p>
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
