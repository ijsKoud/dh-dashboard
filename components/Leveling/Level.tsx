import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import type { LeaderboardStat } from "../../lib";

const Level: React.FC<LeaderboardStat & { breakline: boolean }> = ({ i, level, breakline }) => {
	const getColour = (index: number): string => (index === 0 ? "#D99D46" : index === 1 ? "#989898" : index === 2 ? "#AD7346" : "#50555A");

	const getProgress = () => {
		return (level.xp / (level.level * 75)) * 100;
	};

	return (
		<div>
			<div className="leveling-item">
				<h1
					className="leveling__item-title"
					style={{
						background: getColour(i)
					}}
				>
					{i + 1}
				</h1>
				<p className="leveling__item-username">{level.tag}</p>
				<CircularProgressbar
					className="progress-ring"
					value={getProgress()}
					text={`Level ${level.level}`}
					styles={buildStyles({
						trailColor: "#50555A",
						pathColor: "#46CBF1",
						textColor: "#46CBF1"
					})}
				/>
			</div>
			{breakline && <div className="break-line" />}
		</div>
	);
};

export default Level;
