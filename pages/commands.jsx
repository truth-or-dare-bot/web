import { useCallback, useState } from "react";
import commands from "../assets/commands.json";
import CommandListCommand from "../components/CommandListCommand";
import CommandsBrokenDropdown from "../components/CommandsBrokenDropdown";

const commandOrder = [
	"truth",
	"dare",
	"tod",
	"wyr",
	"nhie",
	"paranoia",
	"random",
	"help",
	"invite",
];

export default function IndexPage() {
	const [query, setQuery] = useState("");

	const noCharQuery = query.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
	const sort = (a, b) =>
		(commandOrder.includes(a.name) ? commandOrder.indexOf(a.name) : 999) -
		(commandOrder.includes(b.name) ? commandOrder.indexOf(b.name) : 999);

	const combined = [
		...commands
			.filter((c) => c.name.toLowerCase().includes(noCharQuery))
			.sort(sort),
		...commands
			.filter((c) => c.description.toLowerCase().includes(noCharQuery))
			.sort(sort),
	];

	const filteredCommands = combined.filter(
		(value, index, self) =>
			index === self.findIndex((t) => t.name === value.name)
	);

	const onSearchChange = useCallback((event) => {
		const query = event.target.value;
		setQuery(query);
	}, []);

	return (
		<div>
			<div className="flex flex-col mt-24 pb-32">
				<div className="max-w-4xl mx-auto md:mt-12 text-center px-2">
					<h1 className="font-bold text-4xl">Commands</h1>
					<p className="text-lg">
						Truth or Dare Bot&apos;s commands are built into Discord with Slash
						Commands.
						<br />
						Type &quot;/&quot; on your keyboard to see them!
					</p>
					<CommandsBrokenDropdown />
				</div>
				<div className="mt-6 max-w-5xl p-4 rounded-lg mx-auto w-full">
					<div>
						<input
							className="w-full rounded-md h-12 p-4 border border-gray-600 focus:border-2 focus:border-discord-blurple hover:border-discord-blurple bg-transparent transition outline-none"
							type="text"
							placeholder="🔎 Search commands"
							value={query}
							onChange={onSearchChange}
						/>
					</div>
					<div className="mt-4">
						{filteredCommands.map((command, index) => (
							<CommandListCommand
								name={command.name}
								description={command.description}
								options={command.options}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
