import {
	faDiscord,
	faGithub,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import Divider from "./Divider";
import FooterLink from "./FooterLink";
import IconLink from "./IconLink";

export default function Footer() {
	return (
		<div>
			<Divider
				type="curveUp"
				className="dark:fill-theme-d1 fill-theme-l2 -mt-32"
			/>
			<footer className="dark:bg-theme-d1 bg-theme-l2 pb-5 text-center sm:text-left">
				<div className="max-w-7xl px-6 mx-auto">
					{/* Footer Content */}
					<div className="sm:flex py-8">
						<div className="w-full flex flex-col md:flex-row justify-between">
							<div className="p-1 flex-col flex">
								<h1 className="text-lg font-bold">
									Play Truth or Dare in your Discord server!
								</h1>
								<p className="dark:text-gray-300">
									Featuring thousands of questions.
								</p>
								<p className="text-2xl mt-1">
									<IconLink href="/support" title="support" icon={faDiscord} />
									<IconLink
										href="https://twitter.com/truthordareteam"
										title="twitter"
										icon={faTwitter}
									/>
									<IconLink
										href="https://github.com/tandpfun/truth-or-dare"
										title="github"
										icon={faGithub}
									/>
								</p>
							</div>

							<div className="p-1 flex-col flex">
								<h3 className="font-bold uppercase">Product</h3>
								<FooterLink href="/invite" external>
									Invite Bot
								</FooterLink>
								<FooterLink href="/premium">Premium</FooterLink>
								<FooterLink
									href="https://github.com/tandpfun/truth-or-dare"
									external
								>
									Github
								</FooterLink>
							</div>

							<div className="p-1 flex-col flex">
								<h3 className="font-bold uppercase">Resources</h3>
								<FooterLink
									href="https://docs.truthordarebot.xyz/api-docs"
									external
								>
									API Docs
								</FooterLink>
								<FooterLink href="/support" external>
									Support
								</FooterLink>
								<FooterLink href="mailto:support@truthordarebot.xyz" external>
									Email
								</FooterLink>
							</div>

							<div className="p-1 flex-col flex">
								<h3 className="font-bold uppercase">Legal</h3>
								<FooterLink href="/privacy">Privacy</FooterLink>
								<FooterLink href="/terms">Terms</FooterLink>
							</div>

							<div className="p-1 flex-col flex">
								<h3 className="font-bold text-lg">Truth or Dare Premium</h3>
								<p className=" dark:text-gray-300">
									Custom questions and much more!
								</p>
								<Button
									href="/premium"
									className="flex-shrink mx-auto sm:mr-auto sm:ml-0 px-4 py-2 mt-2"
								>
									Get Premium
								</Button>
							</div>
						</div>
					</div>

					{/* Copyright */}
					<div className="sm:w-full border-t border-gray-400">
						<p className="pt-4 ml-2">
							&copy; 2020-{new Date().getFullYear()} Truth or Dare Bot. All
							rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
