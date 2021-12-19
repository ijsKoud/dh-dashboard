import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Unauthorized from "../../components/Unauthorized";
import { fetch, useAuth } from "../../lib";

import { useRouter } from "next/router";
import NotFound from "../404";

const Transcripts: NextPage = () => {
	const { user, loading } = useAuth();
	const { query } = useRouter();
	const [isAvailable, setIsAvailable] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		setIsLoading(true);

		fetch<any>(`/api/transcript/${query.transcriptId}`, { method: "GET", cancelToken: token })
			.then((res) => {
				if (res.data) setIsAvailable(true);
				else setIsAvailable(false);
			})
			.catch(() => setIsAvailable(false));

		setIsLoading(false);

		return () => cancel();
	}, [query]);

	return loading || isLoading ? (
		<Loading />
	) : user && user.rank >= 5 ? (
		isAvailable ? (
			<main className="transcripts">
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
				<iframe src={`${process.env.NEXT_PUBLIC_API}/api/transcript/${query.transcriptId}`} />
			</main>
		) : (
			<NotFound />
		)
	) : (
		<Unauthorized />
	);
};

export default Transcripts;
