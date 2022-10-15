import React from "react";

const About = () => {
	return (
		<div className="w-full flex flex-col mt-11">
			<h1 className="text-center font-bold text-3xl">
				What our clients say about us
			</h1>
			<div className="flex w-full mt-6">
				<div className="w-1/2 flex flex-col">
					<img
						className="object-cover aspect-video w-9/12 rounded-tr-[3em]"
						src="https://avatars.githubusercontent.com/u/499550?v=4"
						alt=""
					/>
				</div>
				<div className="w-1/2 flex flex-col justify-between">
					<h1 className="font-bold text-2xl">
						Superb! My task has never done as fast as after using taskero{" "}
					</h1>
					<p className="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
						culpa sequi vero, expedita modi fugiat, illum optio soluta tempore
						quia ullam eum labore. Error consectetur fuga in asperiores sed
						nesciunt!
					</p>
					<p className="font-semibold">Evan You - Founder of vuejs framework</p>
				</div>
			</div>
		</div>
	);
};

export default About;
