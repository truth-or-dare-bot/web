import {
	DiscordActionRow,
	DiscordAttachments,
	DiscordButton,
	DiscordCommand,
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordEmbedFooter,
	DiscordMessage,
	DiscordMessages,
} from "@skyra/discord-components-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DiscordExample() {
	const { resolvedTheme } = useTheme();
	const [data, setData] = useState(null);
	const [count, setCount] = useState(0);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		fetchQuestion();
	}, []);

	function fetchQuestion(type = "truth", rating = "PG") {
		setLoading(true);
		fetch(`https://api.truthordarebot.xyz/v1/${type}?rating=${rating}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}

	function handleButtonClick(type = "truth") {
		if (count >= 5) return;
		setCount(count + 1);
		fetchQuestion(type);
	}

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
					author="Coding"
					avatar="/coding.png"
					command="/truth"
				></DiscordCommand>
				<DiscordEmbed
					slot="embeds"
					color="#3B82F6"
					embedTitle={isLoading ? "Loading..." : data?.question}
				>
					<DiscordEmbedFooter slot="footer">
						Type: {data?.type || "TRUTH"} | Rating: PG
					</DiscordEmbedFooter>
				</DiscordEmbed>
				<DiscordAttachments slot="components">
					<DiscordActionRow>
						<DiscordButton
							type="success"
							disabled={isLoading}
							onClick={(e) =>
								!e.currentTarget.disabled ? handleButtonClick("truth") : null
							}
						>
							Truth
						</DiscordButton>
						<DiscordButton
							type="destructive"
							disabled={isLoading}
							onClick={(e) =>
								!e.currentTarget.disabled ? handleButtonClick("dare") : null
							}
						>
							Dare
						</DiscordButton>
						<DiscordButton
							type="primary"
							disabled={isLoading}
							onClick={(e) =>
								!e.currentTarget.disabled
									? handleButtonClick(Math.random() > 0.5 ? "truth" : "dare")
									: null
							}
						>
							Random
						</DiscordButton>
					</DiscordActionRow>
				</DiscordAttachments>
			</DiscordMessage>
			<DiscordMessage author="Coding" avatar="/coding.png">
				Try it out by pressing the buttons above!
			</DiscordMessage>
		</DiscordMessages>
	);

	const inviteMessage = (
		<div>
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
						author="Coding"
						avatar="/coding.png"
						command="/invite"
					></DiscordCommand>
					<DiscordEmbed
						slot="embeds"
						color="#3B82F6"
						embedTitle="Wanna keep playing?"
					>
						<DiscordEmbedDescription slot="description">
							Add the bot to your server with the button below!
						</DiscordEmbedDescription>
					</DiscordEmbed>
					<DiscordAttachments slot="components">
						<DiscordActionRow>
							<DiscordButton type="primary" url="/invite">
								Invite Truth or Dare
							</DiscordButton>
						</DiscordActionRow>
					</DiscordAttachments>
				</DiscordMessage>
				<DiscordMessage author="Coding" avatar="/coding.png">
					Try it out by pressing the buttons above!
				</DiscordMessage>
			</DiscordMessages>
		</div>
	);

	return <div>{count < 5 ? TODMessage : inviteMessage}</div>;
}
