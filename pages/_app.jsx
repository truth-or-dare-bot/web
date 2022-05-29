import Navbar from "../components/Navbar";
import OpenGraph from "../components/OpenGraph";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
faConfig.autoAddCss = false;
import revealConfig from "react-reveal/globals";
revealConfig({ ssrFadeout: true });
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../context/auth";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/Footer";
import TransitionLayout from "../components/TransitionLayout";
import Script from "next/script";

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
