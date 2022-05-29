import { useCallback, useEffect, useRef } from "react";

export default function CommandListCommand({ name, description, options }) {
	const collapseElement = useRef(null);

	const collapseCommand = useCallback(() => {
		history.pushState({}, "", `#${name.replaceAll(" ", "-")}`);
		const elem = collapseElement.current;
		if (elem.clientHeight) {
			elem.style.height = 0;
		} else {
			elem.style.height = elem.scrollHeight + "px";
		}
	}, [name]);

	useEffect(() => {
		if (window.location.hash.slice(1) === name.replaceAll(" ", "-")) collapseCommand();
	}, [name, collapseCommand]);

	return (
		<div className="scroll-m-24" id={name.replaceAll(" ", "-")}>
			<div className="mt-4 overflow-hidden rounded-md">
				<div
					className="flex cursor-pointer flex-col items-center bg-discord-blurple/30 p-4 text-center md:flex-row md:text-left"
					onClick={collapseCommand}>
					<h2 className="text-lg font-semibold">/{name}</h2>
					<p className="ml-2">
						<span className="hidden md:inline">- </span>
						{description}
					</p>
				</div>
				<div
					className="h-0 overflow-hidden bg-discord-blurple/20 transition-[height] duration-300"
					ref={collapseElement}>
					<div className="border-t-2 border-discord-blurple p-4 pt-2">
						<div>
							<h3 className="font-semibold">Options:</h3>
						</div>
						<div>
							{options.length
								? options.map((opt, index) => (
										<p key={index} className="ml-4">
											<span className="font-medium">
												{opt.name}
												{!opt.required && "?"}
											</span>{" "}
											- {opt.description}
										</p>
								  ))
								: "No Options"}
						</div>
						<div className="mt-2 hidden text-sm font-normal dark:text-gray-200 md:flex">
							options ending in &quot;?&quot; are optional.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
