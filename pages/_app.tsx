import "../styles/index.scss";
import "react-circular-progressbar/dist/styles.css";
import "react-notifications-component/dist/theme.css";

import ReactNotification from "react-notifications-component";
import type { AppProps } from "next/app";
import { ProvideAuth } from "../lib";
import { AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps, router }: AppProps) => {
	return (
		<>
			<ReactNotification />
			<ProvideAuth>
				<Navbar />
				<AnimatePresence exitBeforeEnter>
					<Component key={router.route} {...pageProps} />
				</AnimatePresence>
				<Footer />
			</ProvideAuth>
		</>
	);
};

export default App;
