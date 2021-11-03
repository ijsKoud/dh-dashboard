import axios from "axios";
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { fetch, LeaderboardStat } from "../../lib";

const Leveling: React.FC = () => {
	const [stats, setStats] = useState<LeaderboardStat[]>([]);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		fetch<LeaderboardStat[]>("/api/leaderboard", { method: "GET", cancelToken: token })
			.then((res) => setStats(res.data))
			.catch(() => void 0);

		return () => cancel();
	}, []);

	const getColour = (index: number): string =>
		index === 0 ? "#D99D46" : index === 1 ? "#989898" : index === 2 ? "#AD7346" : "#50555A";

	const getProgress = (level: LeaderboardStat) => {
		return (level.level.xp / (level.level.level * 75)) * 100;
	};

	return (
		<div className="leveling">
			<h1 className="leveling-title">Leveling Leaderboard</h1>
			<div className="leveling-container">
				{stats.map((level) => (
					<div key={level.i}>
						<div className="leveling-item">
							<h1
								className="leveling__item-title"
								style={{
									background: getColour(level.i),
								}}>
								{level.i + 1}
							</h1>
							<p className="leveling__item-username">{level.level.tag}</p>
							<CircularProgressbar
								className="progress-ring"
								value={getProgress(level)}
								text={`Level ${level.level.level}`}
								styles={buildStyles({
									trailColor: "#50555A",
									pathColor: "#46CBF1",
									textColor: "#46CBF1",
								})}
							/>
						</div>
						{level.i + 1 < stats.length && <div className="break-line" />}
					</div>
				))}
			</div>
		</div>
	);
};

export default Leveling;
