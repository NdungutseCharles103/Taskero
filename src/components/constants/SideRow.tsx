import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { BiAnalyse } from "react-icons/bi";
import { useApp } from "../../contexts/AppContext";

type Props = {
  icon: ReactNode | HTMLBaseElement | IconType;
  name: string;
  note?: any;
  tw?: string;
  show?: boolean;
}

const SideRow = ({icon, name, note, tw, show}: Props) => {
  const { theme } = useApp()
	return (
		<div className={`flex font-semibold px-3 py-2 rounded-md hover:bg-[#e2eeed] hover:text-green-800 cursor-pointer justify-between items-center ${tw}`}>
			<div className="flex items-center">
        <>
				{icon}
        </>
				<p className={`ml-2 duration-500 hidden tab:flex ${show &&'flex'}`}>{name}</p>
			</div>
      {note}
		</div>
	);
};

export default SideRow;
