import React from "react";
import Link from "next/link";

interface Props {
	enabled: boolean;
}

const UserDropdown: React.FC<Props> = ({ enabled }) => {
	return (
		<ul className={`navbar-dropdown ${enabled ? "enabled" : ""}`.trim()}>
			<li>
				<Link href="/modlogs">
					<a>
						<i className="fas fa-exclamation-circle" /> Modlogs
					</a>
				</Link>
			</li>
			<li>
				<Link href="/transcripts">
					<a>
						<i className="fas fa-file-alt" /> Transcripts
					</a>
				</Link>
			</li>
			<ul className="separator"></ul>
			<button>
				<i className="fas fa-sign-out-alt" /> Logout
			</button>
		</ul>
	);
};

export default UserDropdown;
