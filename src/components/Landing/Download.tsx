import React from "react";

const Download = () => {
	return (
		<div id="download" className="w-full flex-col mt-[11vh]">
			<h2 className="text-2xl font-bold">
				Ready to simplify your life with us?
			</h2>
			<div className="w-full flex items-center">
				<div className="flex ltab:w-1/2 w-full flex-col justify-between h-full">
					<p className="mt-[5vh]">
						Join us and nore than 300 successfull company and individuals to
						simplify
					</p>
					<div className="flex items-center mt-[5vh]">
						<img
							className="phone:w-[160px] cursor-pointer w-[100px]"
							src="images/appstore.png"
							alt=""
						/>
						<img
							className="phone:w-[200px] w-[130px] cursor-pointer ml-2"
							src="images/google-play-badge.png"
							alt=""
						/>
					</div>
				</div>
				<div className="ltab:flex hidden desktop:w-1/2 xtab:w-2/3 w-full flex-col h-[60vh] items-end">
					<img
						className="h-full w-1/2 object-cover"
						src="/images/download.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Download;
