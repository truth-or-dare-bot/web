import Button from "../components/Button";

export default function NotFoundPage() {
	return (
		<div className="mt-48 pb-8 md:mt-56 md:pb-32">
			<div className="mx-auto max-w-4xl px-2 text-center">
				<h1 className="text-8xl font-bold">404</h1>
				<p className="text-2xl">The requested URL was not found.</p>
				<div className="mt-4">
					<Button href="/" className="px-4 py-2 text-white">
						Home Page
					</Button>
					<Button href="/support" className="mt-2 px-4 py-2 text-white sm:ml-2 sm:mt-0" external>
						Get Support
					</Button>
				</div>
			</div>
		</div>
	);
}
