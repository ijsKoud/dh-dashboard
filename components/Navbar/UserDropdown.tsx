import React, { useState } from "react";
import Link from "next/link";
import { ApiError, fetch, useAuth } from "../../lib";
import { PulseLoader } from "react-spinners";
import type { AxiosError } from "axios";

interface Props {
	enabled: boolean;
	setEnabled: (boolean: boolean) => void;
}

const UserDropdown: React.FC<Props> = ({ enabled, setEnabled }) => {
	const { user, update } = useAuth();
	const [loading, setLoading] = useState(false);

	const closeMenu = () => setEnabled(false);

	const logout = async () => {
		setLoading(true);

		try {
			await fetch("/oauth/logout", { method: "DELETE" });
			update(null);
		} catch (err) {
			const error = err as AxiosError<ApiError>;
			if (!("isAxiosError" in error)) return;
			console.error(error.response?.data.error);
			// to do: error logging
		}

		setLoading(false);
		closeMenu();
	};

	return (
		<ul className={`navbar-dropdown ${enabled ? "enabled" : ""}`.trim()}>
			<li className="navbar-dropdown-user">
				<p className="navbar-dropdown-username">{user?.username ?? "..."}</p>
				<span>#{user?.discriminator ?? "0000"}</span>
			</li>
			<li>
				<button className="navbar-dropdown-item" onClick={closeMenu}>
					<i className="fas fa-address-card" /> Rankcard
				</button>
			</li>
			<li>
				<Link href="/modlogs">
					<a className="navbar-dropdown-item" onClick={closeMenu}>
						<i className="fas fa-exclamation-circle" /> Modlogs
					</a>
				</Link>
			</li>
			<li>
				<Link href="/transcripts">
					<a className="navbar-dropdown-item" onClick={closeMenu}>
						<i className="fas fa-file-alt" /> Transcripts
					</a>
				</Link>
			</li>
			<li className="separator"></li>
			<li>
				<button className="navbar-dropdown-item" onClick={logout} disabled={loading}>
					{loading ? (
						<PulseLoader color="rgb(200, 195, 188)" />
					) : (
						<>
							<i className="fas fa-sign-out-alt" /> Logout
						</>
					)}
				</button>
			</li>
		</ul>
	);
};

export default UserDropdown;
