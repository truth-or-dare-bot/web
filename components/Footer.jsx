import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import Button from "./Button";
import Divider from "./Divider";
import FooterLink from "./FooterLink";
import IconLink from "./IconLink";

export default function Footer() {
	return (
		<div>
			<Divider type="curveUp" className="-mt-32 fill-theme-l2 dark:fill-theme-d1" />
			<footer className="bg-theme-l2 pb-5 text-center dark:bg-theme-d1 sm:text-left">
				<div className="mx-auto max-w-7xl px-6">
					{/* Footer Content */}
					<div className="py-8 sm:flex">
						<div className="flex w-full flex-col justify-between md:flex-row">
							<div className="flex flex-col p-1">
								<h1 className="text-lg font-bold">Play Truth or Dare in your Discord server!</h1>
								<p className="dark:text-gray-300">Featuring thousands of questions.</p>
								<p className="mt-1 text-2xl">
									<IconLink href="/support" title="support" icon={faDiscord} />
									<IconLink href="https://twitter.com/truthordareteam" title="twitter" icon={faTwitter} />
									<IconLink href="https://github.com/tandpfun/truth-or-dare" title="github" icon={faGithub} />
								</p>
							</div>

							<div className="flex flex-col p-1">
								<h2 className="font-bold uppercase">Product</h2>
								<FooterLink href="/invite" external>
									Invite Bot
								</FooterLink>
								<FooterLink href="/premium">Premium</FooterLink>
								<FooterLink href="https://github.com/tandpfun/truth-or-dare" external>
									GitHub
								</FooterLink>
							</div>

							<div className="flex flex-col p-1">
								<h2 className="font-bold uppercase">Resources</h2>
								<FooterLink href="https://docs.truthordarebot.xyz/api-docs" external>
									API Docs
								</FooterLink>
								<FooterLink href="/support" external>
									Support
								</FooterLink>
								<FooterLink href="mailto:support@truthordarebot.xyz" external>
									Email
								</FooterLink>
							</div>

							<div className="flex flex-col p-1">
								<h2 className="font-bold uppercase">Legal</h2>
								<FooterLink href="/privacy">Privacy</FooterLink>
								<FooterLink href="/terms">Terms</FooterLink>
							</div>

							<div className="flex flex-col p-1">
								<h2 className="text-lg font-bold">Truth or Dare Premium</h2>
								<p className=" dark:text-gray-300">Custom questions and much more!</p>
								<Button href="/premium" className="mx-auto mt-2 flex-shrink px-4 py-2 sm:mr-auto sm:ml-0">
									Get Premium
								</Button>
							</div>
						</div>
					</div>

					{/* Copyright */}
					<div className="border-t border-gray-400 sm:w-full">
						<p className="ml-2 pt-4">&copy; 2020-{new Date().getFullYear()} Truth or Dare Bot. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
