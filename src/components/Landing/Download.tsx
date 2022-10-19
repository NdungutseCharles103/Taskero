import React from 'react'

const Download = () => {
  return (
		<div id='download' className="w-full flex mt-[11vh]">
			<div className="flex w-1/2 flex-col justify-between h-full">
				<h2 className="text-2xl font-bold">
					Ready to simplify your life with us?
				</h2>
				<p className="mt-[5vh]">
					Join us and nore than 300 successfull company and individuals to
					simplify
				</p>
				<div className="flex items-center mt-[5vh]">
					<img className="w-[160px]" src="images/appstore.png" alt="" />
					<img
						className="w-[200px]"
						src="images/google-play-badge.png"
						alt=""
					/>
				</div>
			</div>
			<div className="flex w-1/2 flex-col overflow-hidden h-[40vh]">
				<img
					src="https://o.remove.bg/downloads/22a8db1e-7a27-4583-9498-a8a54a4ca2bf/webp-removebg-preview.png"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Download