import {
	DiscordCommand,
	DiscordCustomEmoji,
	DiscordEmbed,
	DiscordEmbedFooter,
	DiscordMessage,
	DiscordMessages,
} from "@skyra/discord-components-react";
import { useTheme } from "next-themes";

export default function RepeatPreventionExample() {
	const { resolvedTheme } = useTheme();

	const TODMessage = (
		<DiscordMessages className="rounded-lg" lightTheme={resolvedTheme === "light"}>
			<DiscordMessage author="Truth or Dare" avatar="/icon-192x192.png" bot verified>
				<DiscordCommand slot="reply" author="Ben" avatar="/ben.png" command="/truth"></DiscordCommand>
				<DiscordEmbed slot="embeds" color="#3B82F6" embedTitle="What would be a perfect day for you?">
					<DiscordEmbedFooter slot="footer">Type: TRUTH | Rating: PG</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
			<DiscordMessage author="Truth or Dare" avatar="/icon-192x192.png" bot verified>
				<DiscordCommand slot="reply" author="Ben" avatar="/ben.png" command="/truth"></DiscordCommand>
				<DiscordEmbed slot="embeds" color="#3B82F6" embedTitle="What would be a perfect day for you?">
					<DiscordEmbedFooter slot="footer">Type: TRUTH | Rating: PG</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
			<DiscordMessage author="Ben" avatar="/ben.png">
				ive answered that one twice already <DiscordCustomEmoji name="german" url="/german_emoji.webp" />
			</DiscordMessage>
		</DiscordMessages>
	);

	return <div>{TODMessage}</div>;
}
