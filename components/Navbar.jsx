import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef } from "react";
import { useEffect } from "react";

import Logo from "./Logo";
import NavItem from "./NavItem";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
	const collapseElement = useRef(null);

	useEffect(() => {
		window.addEventListener("click", e => collapseMenu(e, true));
	}, []);

	function collapseMenu(_, noOpen = false) {
		const elem = collapseElement.current;
		if (!elem) return;
		if (elem.clientHeight) {
			elem.style.height = 0;
		} else if (!noOpen) {
			elem.style.height = elem.scrollHeight + "px";
		}
	}

	return (
		<div className="flex justify-center">
			<div className="fixed top-0 z-[100] my-4 mx-auto w-[90%] rounded-md border border-black/10 bg-black/5 py-2 px-4 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 lg:w-[62rem]">
				<div className="flex items-center">
					<Link href="/">
						<a title="Home">
							<Logo className="h-8 w-8" />
						</a>
					</Link>
					<div className="ml-auto flex items-center md:hidden">
						<ThemeSwitcher className="mr-2 p-1" />
						<button className="p-1 text-xl" onClick={collapseMenu} aria-label="Open menu">
							<FontAwesomeIcon icon={faBars} />
						</button>
					</div>
					<div className="hidden w-full items-center md:flex">
						<div className="ml-3">
							<NavItem href="/">Home</NavItem>
							<NavItem href="/commands">Commands</NavItem>
							<NavItem href="/premium">Premium</NavItem>
							<NavItem href="/support" external>
								Support
							</NavItem>
						</div>
						<div className="ml-auto flex items-center">
							<a
								href="/invite"
								className="mr-2 items-center rounded-lg bg-discord-blurple/20 px-2 py-1 font-semibold text-discord-blurple transition hover:bg-discord-blurple/30"
								target="_blank"
								rel="noopener noreferrer">
								<FontAwesomeIcon className="mr-2" icon={faDiscord} />
								Add Truth or Dare
							</a>
							<ThemeSwitcher />
						</div>
					</div>
				</div>
				<div className="h-0 overflow-hidden transition-[height] duration-300 md:hidden" ref={collapseElement}>
					<div className="mtr-2 flex flex-col ">
						<NavItem href="/">Home</NavItem>
						<NavItem href="/commands">Commands</NavItem>
						<NavItem href="/premium">Premium</NavItem>
						<NavItem href="/support" external>
							Support
						</NavItem>
						<div className="flex items-center">
							<NavItem href="/invite" external>
								<FontAwesomeIcon icon={faDiscord} className="mr-1" /> Add Truth or Dare
							</NavItem>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
