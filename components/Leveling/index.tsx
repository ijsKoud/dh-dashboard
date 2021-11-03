import React from "react";
import Image from "next/image";
import { CircularProgressbar } from "react-circular-progressbar";

const Leveling: React.FC = () => {
	return (
		<div className="leveling">
			<h1>Leveling Leaderboard</h1>
			<ul>
				<li className="leveling-item">
					<Image
						className="leveling_item-logo"
						alt="avatar"
						src={"https://static.daangamesdg.xyz/discord/pfp.gif"}
						width={50}
						height={50}
					/>
					<h4>DaanGamesDG#7621</h4>
					<CircularProgressbar className="leveling_item-progress" text={"Level: 20"} value={40} />
				</li>
			</ul>
		</div>
	);
};

export default Leveling;
