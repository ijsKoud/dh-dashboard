import "../styles/index.scss";
import "react-circular-progressbar/dist/styles.css";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ProvideAuth } from "../lib";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<ProvideAuth>
				<Navbar />
				<Component {...pageProps} />
			</ProvideAuth>
		</>
	);
};

export default App;
