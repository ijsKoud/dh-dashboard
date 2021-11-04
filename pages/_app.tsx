import "../styles/index.scss";
import "react-circular-progressbar/dist/styles.css";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ProvideAuth } from "../lib";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }: AppProps) => {
	return (
		<>
			<ProvideAuth>
				<Navbar />
				<AnimatePresence exitBeforeEnter>
					<Component key={router.route} {...pageProps} />
				</AnimatePresence>
			</ProvideAuth>
		</>
	);
};

export default App;
