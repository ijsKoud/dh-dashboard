import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Leveling: React.FC = () => {
	const getColour = (index: number): string =>
		index === 0 ? "#D99D46" : index === 1 ? "#989898" : index === 2 ? "#AD7346" : "#50555A";

	return (
		<div className="leveling">
			<h1 className="leveling-title">Leveling Leaderboard</h1>
			<div className="leveling-container">
				{Array(100)
					.fill(null)
					.map((_, i) => (
						<div key={i}>
							<div className="leveling-item">
								<h1
									className="leveling__item-title"
									style={{
										background: getColour(i),
									}}>
									{i + 1}
								</h1>
								<p className="leveling__item-username">DaanGamesDG#7621</p>
								<CircularProgressbar
									className="progress-ring"
									value={20}
									text={"Level 1"}
									styles={buildStyles({
										trailColor: "#50555A",
										pathColor: "#46CBF1",
										textColor: "#46CBF1",
									})}
								/>
							</div>
							{i + 1 < 100 && <div className="break-line" />}
						</div>
					))}
			</div>
		</div>
	);
};

export default Leveling;
