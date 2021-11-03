import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Leveling: React.FC = () => {
	const getColour = (index: number): string =>
		index === 0 ? "#D99D46" : index === 1 ? "#989898" : index === 2 ? "#AD7346" : "#50555A";

	return (
		<div className="leveling">
			<h1 className="leveling-title">Leveling Leaderboard</h1>
			<div className="dhboard__items-container">
				{Array(2000)
					.fill(null)
					.map((_, i) => (
						<div key={i}>
							<div className="dhboard-item">
								<h1
									className="dhboard__item-title"
									style={{
										background: getColour(i),
									}}>
									{i + 1}
								</h1>
								<p className="dhboard__item-username">DaanGamesDG#7621</p>
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
							{i + 1 < 2000 && <div className="break-line" />}
						</div>
					))}
			</div>
		</div>
	);
};

export default Leveling;
