import type { NextPage } from "next";
import Head from "next/head";
import Leveling from "../components/Leveling";

const Landing: NextPage = () => {
	return (
		<main className="landing">
			<Head>
				<title>DH Dashboard – Leaderboard</title>
				<meta property="og:site_name" content="DH Dashboard" />
				<meta property="og:title" content="DH Dashboard" />
				<meta property="og:type" content="site" />
				<meta
					property="og:description"
					content="Dashboard for the open-source multi-purpose Discord bot for Draavo's Hangout written in TypeScript."
				/>
				<meta property="og:image" content="/favicon.ico" />
			</Head>
			<Leveling />
		</main>
	);
};

export default Landing;
