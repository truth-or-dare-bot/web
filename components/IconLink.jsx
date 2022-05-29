import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLink({ href, icon, title }) {
	return (
		<a className="pr-2 transition hover:opacity-80" href={href} title={title} target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={icon} />
		</a>
	);
}
