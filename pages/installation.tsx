import type { NextPage } from "next";
import React from "react";
import { BotGuide, DashboardtGuide } from "../components/guides";
import Head from "next/head";

const Installation: NextPage = () => {
	return (
		<main className="installation">
			<Head>
				<title>DH Dashboard – Installation guide</title>
				<meta property="og:site_name" content="DH Dashboard" />
				<meta property="og:title" content="DH Dashboard" />
				<meta property="og:type" content="site" />
				<meta
					property="og:description"
					content="Dashboard for the open-source multi-purpose Discord bot for Draavo's Hangout written in TypeScript."
				/>
				<meta property="og:image" content="/favicon.ico" />
			</Head>
			<h1>Installation Guide</h1>
			<BotGuide />
			<DashboardtGuide />
		</main>
	);
};

export default Installation;
