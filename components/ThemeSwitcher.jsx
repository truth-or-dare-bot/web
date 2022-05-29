import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export default function ThemeSwitcher({ className = "" }) {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button
			className={`rounded-lg p-2 transition md:hover:bg-black/10 md:dark:hover:bg-white/10 ${className}`}
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			aria-label="Change theme">
			{resolvedTheme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
		</button>
	);
}
