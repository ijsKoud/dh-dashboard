import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Unauthorized from "../../components/Unauthorized";
import { fetch, TranscriptsResponse, useAuth } from "../../lib";
import Link from "next/link";

const Transcripts: NextPage = () => {
	const { user, loading } = useAuth();
	const [transcripts, setTranscripts] = useState<string[]>([]);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		fetch<TranscriptsResponse>("/api/transcripts", { method: "GET", cancelToken: token })
			.then((res) => setTranscripts(res.data.files))
			.catch(() => void 0);

		return () => cancel();
	}, []);

	return loading ? (
		<Loading />
	) : user && user.rank >= 5 ? (
		<main className="modlogs">
			<Head>
				<title>DH Dashboard – Transcripts</title>
				<meta property="og:site_name" content="DH Dashboard" />
				<meta property="og:title" content="DH Dashboard" />
				<meta property="og:type" content="site" />
				<meta
					property="og:description"
					content="Dashboard for the open-source multi-purpose Discord bot for Draavo's Hangout written in TypeScript."
				/>
				<meta property="og:image" content="/favicon.ico" />
			</Head>
			<h1>Transcripts</h1>
			<ul className="modlogs-list">
				{transcripts.map((transcript, i) => (
					<li key={i}>
						<Link href={`/transcripts/${transcript}`}>
							<a className="modlogs-item transcript-item">
								<h1>{transcript}</h1>
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

export default Transcripts;
