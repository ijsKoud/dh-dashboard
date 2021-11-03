import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetch, LeaderboardStat } from "../../lib";
import Level from "./Level";

const Leveling: React.FC = () => {
	const [stats, setStats] = useState<LeaderboardStat[]>([]);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		fetch<LeaderboardStat[]>("/api/leaderboard", { method: "GET", cancelToken: token })
			.then((res) => setStats(res.data))
			.catch(() => void 0);

		return () => cancel();
	}, []);

	return (
		<div className="leveling">
			<h1 className="leveling-title">Leveling Leaderboard</h1>
			<div className="leveling-container">
				{stats.map((level) => (
					<Level key={level.i} {...level} breakline={level.i + 1 < stats.length} />
				))}
			</div>
		</div>
	);
};

export default Leveling;
