import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
	return (
		<>
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
