import { DiscordEmbed, DiscordEmbedFooter, DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";
import { useTheme } from "next-themes";

export default function CustomQuestionsExample() {
	const { resolvedTheme } = useTheme();

	const TODMessage = (
		<DiscordMessages className="rounded-lg" lightTheme={resolvedTheme === "light"}>
			<DiscordMessage author="Truth or Dare" avatar="/icon-192x192.png" bot verified>
				⏱️ Daily question:
				<DiscordEmbed slot="embeds" color="#3B82F6" embedTitle="What gets on your nerves the most?">
					<DiscordEmbedFooter slot="footer">Type: TRUTH | Rating: PG</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
			<DiscordMessage author="Coding" avatar="/coding.png">
				when people chew with their mouth open
			</DiscordMessage>
			<DiscordMessage author="Sam" avatar="/sam.png">
				no comment
			</DiscordMessage>
		</DiscordMessages>
	);

	return <div>{TODMessage}</div>;
}
