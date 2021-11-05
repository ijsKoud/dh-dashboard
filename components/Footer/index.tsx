import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<div className="footer">
			<div className="footer-level-1">
				<div className="footer-info">
					<div className="footer__info-branding" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
						<Image src="/favicon.ico" alt="logo" width={50} height={50} />
						<h3>DH Dashboard</h3>
					</div>
				</div>
				<div className="footer-buttons">
					<i className="fab fa-discord" onClick={() => window.open("/discord")} />
					<i className="fab fa-github" onClick={() => window.open("/github")} />
				</div>
			</div>
			<div className="footer-level-2">
				<div className="footer-credits">
					<i className="fas fa-code" />
					&nbsp;with&nbsp;
					<i className="fas fa-heart" />
					&nbsp;by&nbsp;
					<p className="link" onClick={() => window.open("https://daangamesdg.wtf")}>
						DaanGamesDG
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
