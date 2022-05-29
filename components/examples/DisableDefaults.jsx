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
		<DiscordMessages
			className="rounded-lg"
			lightTheme={resolvedTheme === "light"}
		>
			<DiscordMessage
				author="Truth or Dare"
				avatar="/icon-192x192.png"
				bot
				verified
			>
				<DiscordCommand
					slot="reply"
					author="Sam"
					avatar="/sam.png"
					command="/truth"
				></DiscordCommand>
				<DiscordEmbed
					slot="embeds"
					color="#3B82F6"
					embedTitle="Who's the smelliest here?"
				>
					<DiscordEmbedFooter slot="footer">
						Type: TRUTH | Rating: PG
					</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
			<DiscordMessage author="Sam" avatar="/sam.png">
				I don&apos;t like that question
			</DiscordMessage>
			<DiscordMessage
				author="Truth or Dare"
				avatar="/icon-192x192.png"
				bot
				verified
			>
				<DiscordCommand
					slot="reply"
					author="Sam"
					avatar="/sam.png"
					command="/serversettings disablequestion"
				></DiscordCommand>
				✅ Successfully disabled question!
			</DiscordMessage>
		</DiscordMessages>
	);

	return <div>{TODMessage}</div>;
}
