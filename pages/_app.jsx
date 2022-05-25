import Navbar from "../components/Navbar";
import OpenGraph from "../components/OpenGraph";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<ParallaxProvider>
				<div className="main">
					<OpenGraph />
					<Navbar />
					<div className="content">
						<Component {...pageProps} />
					</div>
					<Footer />
				</div>
			</ParallaxProvider>
		</ThemeProvider>
	);
}

export default MyApp;
