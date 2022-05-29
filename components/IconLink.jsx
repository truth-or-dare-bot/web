import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLink({ href, icon, title }) {
	return (
		<a className="pr-2 hover:opacity-80 transition" href={href} title={title} target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={icon} />
		</a>
	);
}
