import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Unauthorized from "../../components/Unauthorized";
import { fetch, ModlogsList, useAuth } from "../../lib";
import Image from "next/image";
import Link from "next/link";

const Modlogs: NextPage = () => {
	const { user, loading } = useAuth();
	const [logs, setLogs] = useState<ModlogsList>([]);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		fetch<ModlogsList>("/api/modlogs", { method: "GET", cancelToken: token })
			.then((res) => setLogs(res.data))
			.catch(() => void 0);

		return () => cancel();
	}, []);

	return loading ? (
		<Loading />
	) : user && user.rank >= 2 ? (
		<main className="modlogs">
			<Head>
				<title>DH Dashboard – Modlogs</title>
				<meta property="og:site_name" content="DH Dashboard" />
				<meta property="og:title" content="DH Dashboard" />
				<meta property="og:type" content="site" />
				<meta
					property="og:description"
					content="Dashboard for the open-source multi-purpose Discord bot for Draavo's Hangout written in TypeScript."
				/>
				<meta property="og:image" content="/favicon.ico" />
			</Head>
			<h1>Modlogs</h1>
			<ul className="modlogs-list">
				{logs.map((log, i) => (
					<li key={i}>
						<Link href={`/modlogs/${log.id}`}>
							<a className="modlogs-item">
								<div className="modlogs-avatar-wrapper">
									<Image
										className="modlogs-avatar"
										src={log.user?.avatar ?? "https://static.daangamesdg.xyz/discord/wumpus.png"}
										alt=""
										width={55}
										height={55}
									/>
								</div>
								<p className="modlogs-user">{log.user?.tag ?? "unknown#0000"}</p>
								<span className="modlogs-amount">{log.amount === 1 ? `${log.amount} modlog` : `${log.amount} modlogs`}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</main>
	) : (
		<Unauthorized />
	);
};

export default Modlogs;
