import React from 'react'
import { useApp } from '../../contexts/AppContext'

const Blog = () => {
    const { theme } = useApp()
  return (
		<div id='blog' className="w-full items-center flex flex-col mt-11">
			<h2
				className={`text-2xl ${theme.tc} text-center flex flex-col font-bold`}
			>
				How taskero can help
				<span className="text-black"> your day to day activities</span>
			</h2>
			<p className="mt-4">
				Don't know where to start? Don't worry we already have prepared videos
				for you about how taskero works to make day easier
			</p>
			<div className="w-full aspect-video rounded-2xl mt-6 max-w-[900px] overflow-hidden mx-auto">
				<video
					controls
					poster="https://cdn.dribbble.com/users/7677055/screenshots/18094692/media/baa38fba55bb6d5de19bfe86a7733fcb.png?compress=1&resize=1000x750&vertical=top"
					className="object-cover w-full h-full"
					src="https://vod-progressive.akamaized.net/exp=1665850747~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4323%2F14%2F371618575%2F1542989051.mp4~hmac=8029eb726d484d4e86749719c1cc1bb2cb2e812e9cd30466dd975f37bf28fba7/vimeo-prod-skyfire-std-us/01/4323/14/371618575/1542989051.mp4"
				/>
			</div>
		</div>
	);
}

export default Blog