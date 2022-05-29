/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	async redirects() {
		return [
			{
				source: "/support",
				destination: "https://discord.gg/vBERMvVaRt",
				permanent: true,
			},
			{
				source: "/invite",
				destination:
					"https://discord.com/oauth2/authorize?client_id=692045914436796436&permissions=19456&scope=bot%20applications.commands",
				permanent: true,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/api/:slug*",
				destination: "http://localhost:4001/api/:slug*",
			},
		];
	},
};

module.exports = nextConfig;
