import { useRef } from "react";

export default function CommandsBrokenDropdown() {
	const collapseElement = useRef(null);

	function collapseCommand() {
		const elem = collapseElement.current;
		if (elem.clientHeight) {
			elem.style.height = 0;
		} else {
			elem.style.height = elem.scrollHeight + "px";
		}
	}

	return (
		<div>
			<button className="text-lg text-red-400 hover:text-red-500 transition" onClick={collapseCommand}>
				Commands not working?
			</button>
			<div
				className="overflow-hidden transition-[height] duration-300 h-0 bg-discord-blurple/30 rounded-md mt-2 max-w-2xl mx-auto text-left "
				ref={collapseElement}>
				<div className="px-4 py-2 border border-discord-blurple rounded-md">
					<div className="text-center">
						<h2 className="text-lg font-semibold">Command Issues</h2>
						<p>
							Commands not showing up could be caused by multiple different issues. Be sure to read and try all the
							steps below as the fix is likely here.
						</p>
					</div>
					<div className="mt-2">
						<h3 className="font-semibold">If you are an admin and YOU can&apos;t see commands:</h3>
						<ol className="list-decimal list-inside">
							<li>
								If you have more than 50 bots in your server, commands may not show up for the bot. This is something on
								Discord&apos;s end, and we can&apos;t fix it.
							</li>
							<li>
								The bot may not be added with the commands scope. Try re-inviting it with this link:{" "}
								<a href="/invite" target="_blank" rel="noopener noreferrer" className="text-blue-500">
									Invite Bot
								</a>
							</li>
						</ol>
					</div>
					<div className="mt-2">
						<h3 className="font-semibold">If a non-admin can&apos;t see commands:</h3>
						<ol className="list-decimal list-inside">
							<li>If you aren&apos;t an admin, tell an admin to follow the steps below:</li>
							<li>
								Make sure the everyone or member role has the <b>Use Application Commands</b> permission in the role
								settings and channel permissions.
							</li>
							<li>
								If that doesn&apos;t help, make sure you didn&apos;t prevent access for a role they have or the channel
								in Server Settings &gt; Integrations &gt; Truth or Dare.
							</li>
						</ol>
					</div>
					<div className="mt-2">
						<h3 className="font-semibold">If you are on a phone or tablet:</h3>
						<ol className="list-decimal list-inside">
							<li>If you see &quot;Interaction Failed&quot;, update your app in the app store/play store.</li>
							<li>
								If you are using Discord on the <u>browser</u> of a mobile device (phone/tablet), they will not show up.
								You will need to install the app.
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}
