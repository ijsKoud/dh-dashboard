import "../styles/index.scss";
import "react-circular-progressbar/dist/styles.css";
import "react-notifications-component/dist/theme.css";

import ReactNotification from "react-notifications-component";
import type { AppProps } from "next/app";
import { ProvideAuth } from "../lib";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps, router }: AppProps) => {
	return (
		<>
			<ReactNotification />
			<ProvideAuth>
				<Navbar />
				<AnimatePresence exitBeforeEnter>
					<motion.div
						key={router.route}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 0.5,
								ease: [0.6, -0.05, 0.01, 0.99]
							}
						}}
						exit={{ opacity: 0 }}
					>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
				<Footer />
			</ProvideAuth>
		</>
	);
};

export default App;
