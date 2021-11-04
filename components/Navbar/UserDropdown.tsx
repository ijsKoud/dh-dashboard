import React from "react";
import Link from "next/link";
import { useAuth } from "../../lib";

interface Props {
	enabled: boolean;
}

const UserDropdown: React.FC<Props> = ({ enabled }) => {
	const { user } = useAuth();

	return (
		<ul className={`navbar-dropdown ${enabled ? "enabled" : ""}`.trim()}>
			<li className="navbar-dropdown-user">
				<p className="navbar-dropdown-username">{user!.username}</p>
				<span>#{user!.discriminator}</span>
			</li>
			<li>
				<button className="navbar-dropdown-item">
					<i className="fas fa-address-card" /> Rankcard
				</button>
			</li>
			<li>
				<Link href="/modlogs">
					<a className="navbar-dropdown-item">
						<i className="fas fa-exclamation-circle" /> Modlogs
					</a>
				</Link>
			</li>
			<li>
				<Link href="/transcripts">
					<a className="navbar-dropdown-item">
						<i className="fas fa-file-alt" /> Transcripts
					</a>
				</Link>
			</li>
			<li className="separator"></li>
			<li>
				<button className="navbar-dropdown-item">
					<i className="fas fa-sign-out-alt" /> Logout
				</button>
			</li>
		</ul>
	);
};

export default UserDropdown;
