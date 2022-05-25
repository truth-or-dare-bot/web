import Head from "next/head";
import { useRouter } from "next/router";

export default function OpenGraph({
	title = "Truth or Dare Bot - Discord Bot!",
	description = "Play Truth or Dare in your Discord server! With over 1500 questions across Truth or Dare, Never Have I Ever, and Would You Rather, this is the perfect way to make conversations with friends more fun and exciting.",
}) {
	const router = useRouter();
	const url = `https://truthordarebot.xyz${router.asPath}`;

	return (
		<Head>
			<title>{title}</title>
			<meta key="description" name="description" content={description} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary" key="twitter-card" />
			<meta
				name="twitter:creator"
				content="@truthordareteam"
				key="twitter-handle"
			/>

			{/* Open Graph */}
			<meta property="og:url" content={url} key="og-url" />
			<meta property="og:image" content="/logo.png" key="og-image" />
			<meta
				property="og:site_name"
				content="Truth or Dare Generator"
				key="og-site-name"
			/>
			<meta property="og:title" content={title} key="og-title" />
			<meta property="og:description" content={description} key="og-desc" />
		</Head>
	);
}
