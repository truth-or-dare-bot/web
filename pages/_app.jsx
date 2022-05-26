import Navbar from "../components/Navbar";
import OpenGraph from "../components/OpenGraph";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/Footer";
import TransitionLayout from "../components/TransitionLayout";

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<ParallaxProvider>
				<div className="flex min-h-screen flex-col">
					<OpenGraph />
					<Navbar />
					<div className="flex-1">
						<TransitionLayout location={router.route}>
							<Component {...pageProps} />
						</TransitionLayout>
					</div>
					<Footer />
				</div>
			</ParallaxProvider>
		</ThemeProvider>
	);
}

export default MyApp;
