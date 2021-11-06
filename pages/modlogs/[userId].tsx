import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Unauthorized from "../../components/Unauthorized";
import { fetch, Modlog, ModlogsUserResponse, useAuth, User } from "../../lib";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { useRouter } from "next/router";

const Modlogs: NextPage = () => {
	const { user, loading } = useAuth();
	const { query } = useRouter();

	const [logs, setLogs] = useState<Modlog[]>([]);
	const [modUser, setModUser] = useState<User | null>(null);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		fetch<ModlogsUserResponse>(`/api/modlogs/${query.userId}`, { method: "GET", cancelToken: token })
			.then((res) => {
				console.log(res.data);
				setLogs(res.data.logs);
				setModUser(res.data.user);
			})
			.catch(() => void 0);

		return () => cancel();
	}, [query]);

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
			<h1>{modUser?.tag ?? "unknown#0000"} – Modlogs</h1>
			<Link href="/modlogs">
				<a className="modlog-goback">
					<i className="fas fa-long-arrow-alt-left" /> Go back
				</a>
			</Link>
			<ul className="modlogs-list">
				{logs.map((log, i) => (
					<li key={i} className="modlogs-item modlog-item">
						<h3>
							{log.type} – CaseId: {log.caseId} ({moment(log.startDate).fromNow()})
						</h3>
						<div className="modlogs-moderator">
							<div className="modlogs-avatar-wrapper">
								<Image
									className="modlogs-avatar"
									src={log.moderator?.avatar ?? "https://static.daangamesdg.xyz/discord/wumpus.png"}
									alt=""
									width={55}
									height={55}
								/>
							</div>
							<p className="modlogs-user">{log.moderator?.tag ?? "unknown#0000"}</p>
						</div>
						<p>{log.reason}</p>
						{log.endDate && <p>Ended at: {moment(log.endDate).format("Do MMMM YYYY, h:mm:ss a")}</p>}
					</li>
				))}
			</ul>
		</main>
	) : (
		<Unauthorized />
	);
};

export default Modlogs;
