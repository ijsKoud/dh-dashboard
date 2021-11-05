import React from "react";
import { PulseLoader } from "react-spinners";

const Loading: React.FC = () => {
	return (
		<main style={{ display: "grid", placeItems: "center" }}>
			<PulseLoader size={30} color="rgb(200, 195, 188)" />
		</main>
	);
};

export default Loading;
