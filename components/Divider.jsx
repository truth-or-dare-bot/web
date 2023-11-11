export default function Divider({ type, className = "" }) {
	if (type === "curveUp") {
		return (
			<svg
				className={`hidden md:block ${className}`}
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width="100%"
				height="100"
				viewBox="0 0 100 100"
				preserveAspectRatio="none">
				<path d="M0 100 C 20 0 50 0 100 100 Z"></path>
			</svg>
		);
	} else if (type === "curveDown") {
		return (
			<svg
				className={`hidden md:block ${className}`}
				id="curveDownColor"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width="100%"
				height="100"
				viewBox="0 0 100 100"
				preserveAspectRatio="none">
				<path d="M0 0 C 50 100 80 100 100 0 Z"></path>
			</svg>
		);
	} else if (type === "curveDownInverse") {
		return (
			<svg
				className={className}
				width="100%"
				height="100"
				viewBox="0 0 100 75"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M61.25 75L100 75L100 0C90 50 77.5 75 61.25 75ZM6.55671e-06 -8.74228e-06L0 75L61.25 75C45 75 25 50 6.55671e-06 -8.74228e-06Z"
				/>
			</svg>
		);
	}
}
