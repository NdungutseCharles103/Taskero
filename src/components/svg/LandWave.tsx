import React from "react";
import { SvgProps } from "./Pattern";

const LandWave = (props: SvgProps) => {
    const { stroke, className, fill } = props;
	return (
		<svg
			id="visual"
			viewBox="0 0 960 540"
			width="960"
			height="540"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
            className={className}
		>
			<path
				d="M0 460L32 435.3C64 410.7 128 361.3 192 362C256 362.7 320 413.3 384 411.7C448 410 512 356 576 349.2C640 342.3 704 382.7 768 382.7C832 382.7 896 342.3 928 322.2L960 302L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
				fill={fill}
				stroke-linecap="round"
				stroke-linejoin="miter"
			></path>
		</svg>
	);
};

export default LandWave;
