import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../lib";
import { PulseLoader } from "react-spinners";
import UserDropdown from "./UserDropdown";

const Navbar: React.FC = () => {
	const { user, loading } = useAuth();
	const [show, setShow] = useState(false);

	return (
		<nav className="navbar">
			<Link href="/">
				<a className="navbar-logo">
					<Image src="/favicon.ico" alt="logo" width={60} height={60} />
				</a>
			</Link>
			<div className="navbar-user">
				{/* <Image
					alt="avatar"
					src={"https://static.daangamesdg.xyz/discord/pfp.gif"}
					width={50}
					height={50}
					onClick={() => setShow(!show)}
				/> */}
				{loading ? (
					<PulseLoader color="rgb(200, 195, 188)" />
				) : user ? (
					<Image
						alt="avatar"
						src={user.displayAvatarURL}
						width={50}
						height={50}
						onClick={() => setShow(!show)}
					/>
				) : (
					<button className="navbar__user-login">
						<i className="fab fa-discord" /> Login
					</button>
				)}
				{true && <UserDropdown enabled={show} />}
			</div>
		</nav>
	);
};

export default Navbar;
