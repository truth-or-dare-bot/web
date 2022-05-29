import Button from "../components/Button";

export default function NotFoundPage() {
	return (
		<div className="mt-48 md:mt-56 pb-8 md:pb-32">
			<div className="max-w-4xl mx-auto text-center px-2">
				<h1 className="font-bold text-8xl">404</h1>
				<p className="text-2xl">The requested URL was not found.</p>
				<div className="mt-4">
					<Button href="/" className="px-4 py-2 text-white">
						Home Page
					</Button>
					<Button
						href="/support"
						className="sm:ml-2 sm:mt-0 mt-2 px-4 py-2 text-white"
						external
					>
						Get Support
					</Button>
				</div>
			</div>
		</div>
	);
}
