import Link from "next/link";
import Logo from "./Logo";
import NavItem from "./NavItem";
import ThemeSwitcher from "./ThemeSwitcher";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
	return (
		<div className="flex justify-center">
			<div className="backdrop-blur-lg z-[999] w-[90%] md:w-[60rem] fixed top-0 px-4 py-2 my-4 rounded-md dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border mx-auto flex items-center">
				<Link href="/">
					<a title="Home">
						<Logo className="w-8 h-8" />
					</a>
				</Link>
				<div className="ml-3">
					<NavItem href="/" hiddenOnMobile>
						Home
					</NavItem>
					<NavItem href="/commands" hiddenOnMobile>
						Commands
					</NavItem>
					<NavItem href="/premium">Premium</NavItem>
					<NavItem href="/support" external>
						Support
					</NavItem>
				</div>
				<div className="ml-auto flex items-center">
					<a
						href="/invite"
						className="hover:bg-discord-blurple/20 bg-discord-blurple/10 text-discord-blurple font-semibold px-2 py-1 transition rounded-lg hidden sm:flex mr-2 items-center"
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
	);
}
