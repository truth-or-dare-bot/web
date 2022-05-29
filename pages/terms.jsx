import OpenGraph from "../components/OpenGraph";

export default function TermsPage() {
	return (
		<div>
			<OpenGraph title="Truth or Dare Bot - Terms of Service" description="Truth or Dare Bot's terms of service." />
			<div className="mt-24 flex flex-col pb-8 md:pb-32">
				<div className="mx-auto w-full max-w-5xl px-4 md:mt-12">
					<div className="text-center">
						<h1 className="text-4xl font-bold">Terms Of Service</h1>
						<p className="text-lg">Effective Date: May 30th, 2022</p>
					</div>
					<div className="mt-4 text-lg">
						<p>
							Truth or Dare Bot (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the truthordarebot.xyz
							website and the Truth or Dare Discord application (the &quot;Service&quot; or &quot;bot&quot;).
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Terms</h1>
						<p className="mt-1">
							By accessing or using the service, you agree to be bound to the terms of service, all applicable laws,
							regulations, and agree that you are responsible for compliance with any applicable laws of the place where
							the owner is based. If you do not acknowledge and agree to these terms, you are prohibited from using or
							accessing the service. This website and its components are protected by the applicable copyright and
							trademark law.
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Trademarks & Copyrights</h1>
						<p className="mt-1">
							&quot;Truth or Dare Bot&quot;, and our &quot;TD&quot; logo, are trademarks of Truth or Dare Bot. This
							website, the Truth or Dare Discord bot, and our &quot;TD&quot; logo are copyrights of Truth or Dare Bot.
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Limitations</h1>
						<p className="mt-1">
							In no event shall we be liable for any damages (including, without limitation, damages for loss of data or
							profit, or due to business interruption) arising out of the use or inability to use the materials on the
							Service, even if us or a Truth or Dare Bot authorized representative has been notified orally or in
							writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied
							warranties, or limitations of liability for consequential or incidental damages, these limitations may not
							apply to you.
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Accuracy of Materials</h1>
						<p className="mt-1">
							The materials appearing on the Service could include technical, typographical, or photographic errors. We
							do not warrant that any of the materials on its website are accurate, complete or current. We may make
							changes to the materials contained on its website at any time without notice. However we do not make any
							commitment to update the materials.
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Modifications</h1>
						<p className="mt-1">
							We may revise these terms of service or our privacy policy for the Service at any time without notice. By
							using the Service you are agreeing to be bound by the then current version of these terms of service and
							privacy policy.
						</p>
						<h1 className="mt-4 text-2xl font-semibold">Refund Policy</h1>
						<p className="mt-1">
							Unless exceptions apply, we accept a 5 days money back guarantee for any purchased goods on this website,
							for any reason, and without justification. We may additionally offer refunds on a case-by-case basis. The
							developers must be contacted to receive a refund. Any other form of chargeback will result in a loss of
							the product and revoked access to our services.
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
