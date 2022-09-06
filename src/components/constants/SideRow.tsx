import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { BiAnalyse } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";

type Props = {
  icon: ReactNode | HTMLBaseElement | IconType;
  name: string;
  note?: any;
  tw?: string;
  show?: boolean;
  shade?: any
}

const SideRow = ({icon, name, note, tw, show, shade}: Props) => {
  const { theme } = useApp()
  const isLink = shade !== null

	return (
    <Link to={`${isLink ? `/${name.toLowerCase().split(' ').join('')}`:''}`}>
		  <div title={name} className={`flex font-semibold px-3 py-2 rounded-md hover:bg-[#e2eeed] hover:text-green-800 cursor-pointer justify-between items-center ${tw} ${shade && 'bg-[#e2eeed] text-green-800'}`}>
		  	<div className="flex items-center">
          <>
		  		{icon}
          </>
		  		<p className={`ml-2 duration-500 hidden tab:flex ${show ?'flex':'tab:hidden'}`}>{name}</p>
		  	</div>
        {note}
		  </div>
    </Link>
	);
};

export default SideRow;
