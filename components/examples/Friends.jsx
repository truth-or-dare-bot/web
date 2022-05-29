import {
	DiscordCommand,
	DiscordEmbed,
	DiscordEmbedFooter,
	DiscordMessage,
	DiscordMessages,
} from "@skyra/discord-components-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const messageContentCases = [
	{
		question: "What's the worst thing you've ever done?",
		commandAuthor: "Coding",
		responses: [
			{
				author: "Mason",
				message: "I uh played country music once",
			},
			{
				author: "Coding",
				message: "WTF you're a horrible person how could you???",
			},
		],
	},
	{
		question: "What's something you've wasted too much money on?",
		commandAuthor: "Mason",
		responses: [
			{
				author: "AC-Dc",
				message: "Fortnite I think, I'm a really hardcore gamer",
			},
			{
				author: "Mason",
				message: "That says a lot about you",
			},
		],
	},
	{
		question: "Who's the smelliest here?",
		commandAuthor: "Ben",
		responses: [
			{
				author: "Ben",
				message: "Sam, obviously",
			},
			{
				author: "Sam",
				message: "WTF",
			},
		],
	},
	{
		question: "What is your biggest fear?",
		commandAuthor: "WaterNinja",
		responses: [
			{
				author: "WaterNinja",
				message: 'People who use "var" to declare variables',
			},
			{
				author: "Mason",
				message: "What is a variable",
			},
		],
	},
	{
		question: "What games do you have on your phone?",
		commandAuthor: "Coding",
		responses: [
			{
				author: "Mason",
				message: "Clash Royale",
			},
			{
				author: "Coding",
				message: "Roblox (the best game)",
			},
		],
	},
	{
		question:
			"What is one thing that you have always wanted to do but have not gotten around to it yet?",
		commandAuthor: "Ben",
		responses: [
			{
				author: "Mason",
				message: "Sleeping, seems like something cool to try someday",
			},
			{
				author: "Ben",
				message: "Finishing a project",
			},
		],
	},
	{
		question: "Are you single?",
		commandAuthor: "Mason",
		responses: [
			{
				author: "Mason",
				message: "ayo truth or dare 🤨🤨🤨🤨",
			},
			{
				author: "AC-Dc",
				message: "Nah",
			},
		],
	},
	{
		question: "Speak only in emojis for the next 5 minutes",
		commandAuthor: "AC-Dc",
		responses: [
			{
				author: "AC-Dc",
				message: "💖💖✨,👉👈💖💖✨🥺👉👈",
			},
			{
				author: "WaterNinja",
				message: "🤨🤨 ayo ac??",
			},
		],
	},
	{
		question: "What app do you hate, but use anyway?",
		commandAuthor: "Sam",
		responses: [
			{
				author: "Sam",
				message: "Twitter",
			},
			{
				author: "Coding",
				message: "the among us game omg i have an addiction",
			},
		],
	},
];

export default function DiscordExample() {
	const { resolvedTheme } = useTheme();
	const [messageContents, setMessageContents] = useState(null);

	useEffect(() => {
		setMessageContents(
			messageContentCases[
				Math.floor(Math.random() * messageContentCases.length)
			]
		);
	}, []);

	if (!messageContents) return;

	const messageComponents = messageContents.responses.map((m, index) => (
		<DiscordMessage
			key={index}
			author={m.author}
			avatar={`/${m.author.toLowerCase()}.png`}
		>
			{m.message}
		</DiscordMessage>
	));

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
					author={messageContents.commandAuthor}
					avatar={`/${messageContents.commandAuthor.toLowerCase()}.png`}
					command="/truth"
				></DiscordCommand>
				<DiscordEmbed
					slot="embeds"
					color="#3B82F6"
					embedTitle={messageContents.question}
				>
					<DiscordEmbedFooter slot="footer">
						Type: TRUTH | Rating: PG
					</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
			{messageComponents}
		</DiscordMessages>
	);

	return <div>{TODMessage}</div>;
}
