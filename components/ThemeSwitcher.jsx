import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button
			className="dark:hover:bg-white/10 hover:bg-black/10 transition p-2 rounded-lg"
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			aria-label="Change theme"
		>
			{resolvedTheme === "dark" ? (
				<Moon className="w-5 h-5" />
			) : (
				<Sun className="w-5 h-5" />
			)}
		</button>
	);
}
