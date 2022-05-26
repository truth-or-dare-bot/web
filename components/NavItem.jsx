import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function NavItem({ children, href, external = false }) {
	const classes = `dark:hover:md:bg-white/10 hover:md:bg-black/10 transition rounded-lg md:p-2 py-1`;

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
		<Link href={href} scroll={false}>
			<a className={classes}>{children}</a>
		</Link>
	);
}
