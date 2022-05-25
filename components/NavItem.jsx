import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function NavItem({
	children,
	href,
	external = false,
	hiddenOnMobile = false,
}) {
	const classes = `dark:hover:bg-white/10 hover:bg-black/10 p-2 transition rounded-lg ${
		hiddenOnMobile ? "hidden sm:inline" : ""
	}`;

	return external ? (
		<a
			href={href}
			className={classes}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
			<FontAwesomeIcon className="ml-2" icon={faArrowUpRightFromSquare} />
		</a>
	) : (
		<Link href={href}>
			<a className={classes}>{children}</a>
		</Link>
	);
}
