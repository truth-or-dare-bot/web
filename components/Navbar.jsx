import Link from "next/link";
import Logo from "./Logo";
import NavItem from "./NavItem";
import ThemeSwitcher from "./ThemeSwitcher";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
	const collapseElement = useRef(null);

	useEffect(() => {
		window.addEventListener("click", (e) => collapseMenu(e, true));
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
			<div className="backdrop-blur-lg z-[100] w-[90%] md:w-[60rem] fixed top-0 px-4 py-2 my-4 rounded-md dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border mx-auto">
				<div className="flex items-center">
					<Link href="/">
						<a title="Home">
							<Logo className="w-8 h-8" />
						</a>
					</Link>
					<div className="ml-auto md:hidden flex items-center">
						<ThemeSwitcher className="p-1 mr-2" />
						<button
							className="text-xl p-1"
							onClick={collapseMenu}
							aria-label="Open menu"
						>
							<FontAwesomeIcon icon={faBars} />
						</button>
					</div>
					<div className="hidden md:flex items-center w-full">
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
								className="hover:bg-discord-blurple/30 bg-discord-blurple/20 text-discord-blurple font-semibold px-2 py-1 transition rounded-lg mr-2 items-center"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="mr-2" icon={faDiscord} />
								Add Truth or Dare
							</a>
							<ThemeSwitcher />
						</div>
					</div>
				</div>
				<div
					className="md:hidden overflow-hidden transition-[height] duration-300 h-0"
					ref={collapseElement}
				>
					<div className="mtr-2 flex flex-col ">
						<NavItem href="/">Home</NavItem>
						<NavItem href="/commands">Commands</NavItem>
						<NavItem href="/premium">Premium</NavItem>
						<NavItem href="/support" external>
							Support
						</NavItem>
						<div className="flex items-center">
							<NavItem href="/invite" external>
								<FontAwesomeIcon icon={faDiscord} className="mr-1" /> Add Truth
								or Dare
							</NavItem>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
