import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "next-themes";
import revealConfig from "react-reveal/globals";
import { ParallaxProvider } from "react-scroll-parallax";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OpenGraph from "../components/OpenGraph";
import TransitionLayout from "../components/TransitionLayout";
import { AuthProvider } from "../context/auth";
import "../styles/globals.css";

faConfig.autoAddCss = false;

revealConfig({ ssrFadeout: true });

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<OpenGraph />
			<ThemeProvider defaultTheme="system" attribute="class">
				<AuthProvider>
					<ParallaxProvider>
						<div className="flex min-h-screen flex-col">
							<Navbar />
							<div className="flex-1">
								<TransitionLayout location={router.route}>
									<Component {...pageProps} />
								</TransitionLayout>
							</div>
							<Footer />
						</div>
					</ParallaxProvider>
				</AuthProvider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
