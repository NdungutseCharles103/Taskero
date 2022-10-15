/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./contexts/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			xs: "280px",
			sm: "320px",
			msm: "380px",
			phone: "450px",
			five: "500px",
			tab: "960px",
			ltab: "780px",
			xtab: "960px",
			desktop: "1280px",
		},
	},
	plugins: [],
};
