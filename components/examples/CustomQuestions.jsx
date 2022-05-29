import {
	DiscordCommand,
	DiscordEmbed,
	DiscordEmbedFooter,
	DiscordMessage,
	DiscordMessages,
} from "@skyra/discord-components-react";
import { useTheme } from "next-themes";

export default function CustomQuestionsExample() {
	const { resolvedTheme } = useTheme();

	const TODMessage = (
		<DiscordMessages className="rounded-lg" lightTheme={resolvedTheme === "light"}>
			<DiscordMessage author="Truth or Dare" avatar="/icon-192x192.png" bot verified>
				<DiscordCommand slot="reply" author="Coding" avatar="/coding.png" command="/questions add"></DiscordCommand>✅
				Question Added!
			</DiscordMessage>
			<DiscordMessage author="Truth or Dare" avatar="/icon-192x192.png" bot verified>
				<DiscordCommand slot="reply" author="Coding" avatar="/coding.png" command="/truth"></DiscordCommand>
				<DiscordEmbed slot="embeds" color="#3B82F6" embedTitle="Do you like Truth or Dare premium?">
					<DiscordEmbedFooter slot="footer">Type: TRUTH | Rating: PG</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
			<DiscordMessage author="Coding" avatar="/coding.png">
				Yes!
			</DiscordMessage>
		</DiscordMessages>
	);

	return <div>{TODMessage}</div>;
}
