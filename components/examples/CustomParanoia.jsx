import { DiscordCommand, DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";
import { useTheme } from "next-themes";

export default function CustomQuestionsExample() {
	const { resolvedTheme } = useTheme();

	const TODMessage = (
		<DiscordMessages className="rounded-lg" lightTheme={resolvedTheme === "light"}>
			<DiscordMessage author="Ben" avatar="/ben.png">
				can you make it so it always shows the question
			</DiscordMessage>
			<DiscordMessage author="Truth or Dare" avatar="/icon-192x192.png" bot verified>
				<DiscordCommand
					slot="reply"
					author="Mason"
					avatar="/mason.png"
					command="/serversettings showparanoia"></DiscordCommand>
				✅ Paranoia questions will now be shown 100% of the time.
			</DiscordMessage>
			<DiscordMessage author="Ben" avatar="/ben.png">
				thank you!!
			</DiscordMessage>
		</DiscordMessages>
	);

	return <div>{TODMessage}</div>;
}
