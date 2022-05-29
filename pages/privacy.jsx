import OpenGraph from "../components/OpenGraph";

export default function PrivacyPage() {
	return (
		<div>
			<OpenGraph
				title="Truth or Dare Bot - Privacy Policy"
				description="Truth or Dare Bot's privacy policy explaining what user data we collect and how we use, store, protect, or share it through use of our service."
			/>
			<div className="mt-24 flex flex-col pb-8 md:pb-32">
				<div className="mx-auto w-full max-w-5xl px-4 md:mt-12">
					<div className="text-center">
						<h1 className="text-4xl font-bold">Privacy Policy</h1>
						<p className="text-lg">Effective Date: May 30th, 2022</p>
					</div>
					<div className="mt-4 text-lg">
						<p>
							Truth or Dare Bot (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the truthordarebot.xyz
							website and the Truth or Dare Discord application (the &quot;Service&quot; or &quot;bot&quot;).
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Welcome!</h1>
						<p className="mt-1">
							This Privacy Policy explains what user data we collect and how we use, store, protect, or share it through
							use of our Service. The entire document covers specifics, but below is a human-understandable overview of
							this Privacy Policy.
						</p>
						<ul className="mt-2 ml-10 list-disc">
							<li>
								<b>We care about privacy.</b> We understand the importance of privacy. We are committed to transparency
								of our policies.
							</li>
							<li>
								<b>We don&apos;t sell data.</b> Our Service is sustained through our premium subscription service. You
								aren&apos;t the product.
							</li>
							<li>
								<b>We only store what&apos;s needed.</b> All data stored is what&apos;s required for the Service to
								function.
							</li>
							<li>
								<b>You control your data.</b> You can request a copy of or deletion of any user data we store on you.
							</li>
						</ul>
						<h1 className="mt-4 text-2xl font-semibold">Types of Data Collected</h1>
						<p className="mt-1">Below is a list of all user data we store.</p>
						<ul className="mt-2 ml-10 list-disc">
							<li>
								<b>Premium Receipts.</b> When a user purchases Truth or Dare Premium, we store a recept of the purchase
								(transaction ID, price, premium slots) connected with their User ID. We will not store or collect your
								payment card details.
							</li>
							<li>
								<b>Premium Slots.</b> When a user purchases Truth or Dare Premium, we store the guild IDs they activate
								and their slot count connected with their User ID.
							</li>
							<li>
								<b>Paranoia Questions.</b> When a user is sent a paranoia question, information about the question sent
								(sender ID, receiver ID, guild ID, channel ID, question) is stored so that the question can be answered.
								This data is required for the command to function, and is deleted once the question is answered.
							</li>
						</ul>
						<h1 className="mt-4 text-2xl font-semibold">Data Storage Length</h1>
						<p className="mt-1">
							Data is stored as long as required for the Service to function, or until data deletion is requested. More
							specifics on data deletion can be found below!
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Disclosure Of Data</h1>
						<p className="mt-1">
							We care about your data. Data is not shared with third parties other than the services listed below:
						</p>
						<ul className="mt-2 ml-10 list-disc">
							<li>
								<b>Sentry.</b> Sentry provides real-time error logs for the service so that we can resolve issues. If an
								action a user creates causes an error or crash, certain user data may be sent to Sentry to help us
								reproduce the issue. User data may include your account information (username and ID), the command you
								ran, and the channel (ID) the command was ran in. This data is deleted after 30 days, and is also
								subject to Sentry&apos;s{" "}
								<a
									href="https://sentry.io/privacy/"
									className="text-blue-500 hover:text-blue-600"
									target="_blank"
									rel="noopener noreferrer">
									privacy policy
								</a>
								.
							</li>
							<li>
								<b>ChargeBee.</b> ChargeBee is a payment service provided by ChargeBee Inc. We use ChargeBee as a
								payment processor for purchases of goods on this site. When premium is purchased, we send your Discord
								User ID to ChargeBee so that purchases can be connected with your account. ChargeBee&apos;s data
								collection and processing policies can be found in their{" "}
								<a
									href="https://www.chargebee.com/privacy/"
									className="text-blue-500 hover:text-blue-600"
									target="_blank"
									rel="noopener noreferrer">
									privacy policy
								</a>
								.
							</li>
						</ul>
						<p className="mt-4">Data also may be disclosed in the belief that such action is necessary to:</p>
						<ul className="mt-2 ml-10 list-disc">
							<li>Comply with a legal obligation</li>
							<li>Protect and defend the rights or property of the Service</li>
							<li>Prevent or investigate possible wrongdoing in connection with the Service</li>
							<li>Protect the personal safety of users of the Service or the public</li>
							<li>Protect against legal liability</li>
						</ul>
						<h1 className="mt-4 text-2xl font-semibold">Requesting Data Deletion</h1>
						<p className="mt-1">
							To request your user data deletion, please email{" "}
							<a
								href="mailto:support@truthordarebot.xyz"
								className="text-blue-500 hover:text-blue-600"
								target="_blank"
								rel="noopener noreferrer">
								support@truthordarebot.xyz
							</a>{" "}
							or join our support Discord server and directly message a developer providing your Discord User ID.
							Depending on the data deleted, certain or all features of the Service may become unavailable to you. Users
							requesting premium information deletion may have their servers deactivated without a refund. You are able
							to request data deletion once every 30 days.
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Requesting Your Data</h1>
						<p className="mt-1">
							To request a collection of your user data stored in our database, please email{" "}
							<a
								href="mailto:support@truthordarebot.xyz"
								className="text-blue-500 hover:text-blue-600"
								target="_blank"
								rel="noopener noreferrer">
								support@truthordarebot.xyz
							</a>{" "}
							or join our support Discord server and directly message a developer with your Discord User ID. You are
							able to request your data once every 30 days, and it may take up to a month to collect your data.
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Contact Us</h1>
						<p className="mt-1">
							If you have any questions, we&apos;re happy to answer them! Please email{" "}
							<a
								href="mailto:support@truthordarebot.xyz"
								className="text-blue-500 hover:text-blue-600"
								target="_blank"
								rel="noopener noreferrer">
								support@truthordarebot.xyz
							</a>{" "}
							or join our support Discord server to ask. We&apos;ll get back to you as soon as possible.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
