import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

export default function OpenGraph({
	title = "Truth or Dare Bot - Discord Bot!",
	description = "Play Truth or Dare in your Discord server! Featuring thousands of questions across games like Truth or Dare, Never Have I Ever, Would You Rather, and Paranoia, Truth or Dare Bot is the perfect way to make conversations with friends more fun and exciting.",
}) {
	const router = useRouter();
	const url = `https://truthordarebot.xyz${router.asPath}`;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta key="description" name="description" content={description} />
				<meta key="theme-color" name="theme-color" content="#5865F2" />
				<meta key="format-detection" name="format-detection" content="telephone=no" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary" key="twitter-card" />
				<meta name="twitter:creator" content="@truthordareteam" key="twitter-handle" />

				{/* Open Graph */}
				<meta property="og:url" content={url} key="og-url" />
				<meta property="og:image" content="/icon-192x192.png" key="og-image" />
				<meta property="og:title" content={title} key="og-title" />
				<meta property="og:description" content={description} key="og-desc" />
				<meta property="og:locale" content="en_US" key="og-locale" />
			</Head>

			{/* Script */}
			<Script src="https://js.chargebee.com/v2/chargebee.js" strategy="lazyOnload" />
			<Script src="https://arc.io/widget.min.js#GE2t6vuH" async defer strategy="lazyOnload" />
			<Script src="https://sa.truthordarebot.xyz/latest.js" strategy="lazyOnload" />
		</>
	);
}
