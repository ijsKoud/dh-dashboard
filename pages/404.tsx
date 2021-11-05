import React from "react";
import Link from "next/link";
import Head from "next/head";

const NotFound: React.FC = () => {
	return (
		<>
			<Head>
				<title>404 – Not found</title>
				<meta property="og:site_name" content="DH Dashboard" />
				<meta property="og:title" content="DH Dashboard" />
				<meta property="og:type" content="site" />
				<meta
					property="og:description"
					content="Dashboard for the open-source multi-purpose Discord bot for Draavo's Hangout written in TypeScript."
				/>
				<meta property="og:image" content="/favicon.ico" />
			</Head>
			<main className="notfound">
				<div className="notfound-error">
					<h1 className="notfound-number">4</h1>
					<div className="notfound-illustration">
						<div className="notfound-circle" />
						<div className="notfound-clip">
							<div className="notfound-paper">
								<div className="notfound-face">
									<div className="notfound-eyes">
										<div className="notfound-eye left" />
										<div className="notfound-eye right" />
									</div>
									<div className="notfound-rosyCheeks left" />
									<div className="notfound-rosyCheeks right" />
									<div className="notfound-mouth" />
								</div>
							</div>
						</div>
					</div>
					<h1 className="notfound-number">4</h1>
				</div>
				<div className="notfound-text">Oops. The page youre looking for doesnt exist.</div>
				<Link href="/">
					<a className="notfound-button">Back Home</a>
				</Link>
			</main>
		</>
	);
};

export default NotFound;
