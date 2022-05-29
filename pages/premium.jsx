import { faBook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Button from "../components/Button";
import OpenGraph from "../components/OpenGraph";
import PremiumPricingPlan from "../components/PremiumPricingPlan";
import PremiumSuccessModal from "../components/PremiumSuccessModal";
import ScreenOverlay from "../components/ScreenOverlay";
import { useUserContext } from "../context/auth";

const CustomQuestionsExample = dynamic(
	async () => await import("../components/examples/CustomQuestions"),
	{ ssr: false }
);

const DisableDefaultsExample = dynamic(
	async () => await import("../components/examples/DisableDefaults"),
	{ ssr: false }
);

const CustomParanoiaExample = dynamic(
	async () => await import("../components/examples/CustomParanoia"),
	{ ssr: false }
);

const premiumPlans = [
	{
		planId: "one-server-USD-Monthly",
		planName: "Premium 1x",
		planDescription: "Premium features for one server of your choice!",
		planFeatures: [
			"One premium server",
			"Unlimited custom questions",
			"Disable default questions",
			"Custom paranoia frequency",
			"Priority support",
		],
		price: 2.99,
	},
	{
		planId: "three-servers-USD-Monthly",
		planName: "Premium 3x",
		planDescription: "Premium features for three servers of your choice!",
		planFeatures: [
			"Three premium servers",
			"Unlimited custom questions",
			"Disable default questions",
			"Custom paranoia frequency",
			"Priority support",
		],
		price: 7.99,
	},
	{
		planId: "custom-bot-USD-Monthly",
		planName: "Custom Bot",
		planDescription: "A premium Truth or Dare bot with your server's branding!",
		planFeatures: [
			"Custom avatar & username",
			"Unlimited custom questions",
			"Disable default questions",
			"Custom paranoia frequency",
			"Priority support",
		],
		price: 9.99,
		buttonLabel: "Coming Soon",
		disabled: true,
	},
];

export default function PremiumPage() {
	const [cbInstance, setCbInstance] = useState(null);
	const [loader, setLoad] = useState({
		show: false,
		type: undefined,
		message: undefined,
	});
	const [showModal, setModal] = useState(false);
	const [transaction, setTransaction] = useState(null);
	const [userState, setUser] = useUserContext();

	async function openPurchaseModal({ planId, planName, price }) {
		setLoad({
			show: true,
			type: "load",
			message: "This should only take a few seconds...",
		});

		const res = await fetch("/api/users/@me").catch(console.error);
		if (!res) {
			setLoad({
				show: true,
				type: "error",
				message:
					"An error occurred. Try reloading the page, and report this in our support server if it keeps happening.",
			});
			return;
		}

		if (res.status === 401) window.location.href = "/api/login";
		else if (!res.ok) {
			setLoad({
				show: true,
				type: "error",
				message:
					"An error occurred. Try reloading the page, and report this in our support server if it keeps happening.",
			});
			return;
		}

		const user = await res.json();
		if (!user) {
			setLoad({
				show: true,
				type: "error",
				message:
					"An error occurred. Try reloading the page, and report this in our support server if it keeps happening.",
			});
			return;
		}

		setUser(user);

		// @ts-expect-error Imported in script tag on frontend
		const cb = cbInstance || window.Chargebee.init({ site: "truthordarebot" });
		setCbInstance(cb);

		cb.openCheckout({
			hostedPage: () => {
				return fetch("/api/chargebee/checkout_url", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({
						planId: planId,
						userId: user.id,
						email: user.email,
					}),
				}).then((res) => res.json());
			},
			loaded: () => {},
			success: async (hostedPageId) => {
				setLoad({
					show: true,
					type: "load",
					message: "Processing your purchase...",
				});
				const capture = await fetch(`/api/chargebee/capture/${hostedPageId}`)
					.then((res) => res.json())
					.catch((_) => null);
				if (!capture) return (this.view = "error");
				setModal(true);
				setTransaction(capture);
				setLoad({
					show: false,
					type: "",
					message: "",
				});
			},
			close: () => {
				setLoad({
					show: false,
					type: "",
					message: "",
				});
			},
			error: (error) => {
				setLoad({
					show: true,
					type: "error",
					message:
						"An error occurred. Try reloading the page, and report this in our support server if it keeps happening.",
				});
				console.error(error);
			},
		});
	}

	function openManagementPortal() {
		// @ts-expect-error Imported in script tag on frontend
		const cb = cbInstance || window.Chargebee.init({ site: "truthordarebot" });
		setCbInstance(cb);

		cb.createChargebeePortal().open();
	}

	return (
		<div>
			<OpenGraph
				title="Truth or Dare Bot - Premium"
				description="Unlock premium features and support the development of the bot with Truth or Dare Premium!"
			/>
			<ScreenOverlay {...loader} />
			<PremiumSuccessModal
				show={showModal}
				transaction={transaction}
				state={setModal}
			/>
			<div className="flex flex-col pb-8 md:pb-32">
				<div className="premiumHeader pt-24 pb-24">
					<div className="md:mt-24 px-6 mx-auto">
						<div className="text-center text-white">
							<h1 className="font-extrabold text-6xl">Truth or Dare Premium</h1>
							<h2 className="text-3xl mt-2">
								Unlock premium features and support the development of the bot!
							</h2>
							<div className="mt-4">
								<Button
									href="https://docs.truthordarebot.xyz/premium-docs"
									className="px-4 py-2 text-white"
									external
									icon={faBook}
								>
									Premium Docs
								</Button>
								<Button
									onClick={openManagementPortal}
									className="sm:ml-2 sm:mt-0 mt-2 px-4 py-2 text-white"
									icon={faCartShopping}
								>
									Manage Subscription
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-16 mx-2">
					<div className="max-w-2xl mx-auto text-center">
						<h1 className="font-extrabold text-5xl bg-gradient-to-r from-violet-600 to-red-500 bg-clip-text text-transparent">
							Premium Plans
						</h1>
					</div>
					<div
						className="mt-8 flex flex-col md:flex-row justify-center gap-8 max-w-7xl mx-auto px-4"
						style={{ flex: "1 1 0px" }}
					>
						{premiumPlans.map((props, index) => (
							<div className="flex-1" key={index}>
								<Fade bottom delay={index * 150}>
									<PremiumPricingPlan
										clickEvent={openPurchaseModal}
										{...props}
									/>
								</Fade>
							</div>
						))}
					</div>
				</div>
				<div className="mt-32 mx-2">
					<div className="max-w-2xl mx-auto text-center">
						<h1 className="font-extrabold text-5xl bg-gradient-to-r from-violet-600 to-red-500 bg-clip-text text-transparent">
							Premium Perks
						</h1>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 justify-center my-12 md:my-24 text-left max-w-7xl gap-12 px-8 mx-auto">
						<Fade bottom>
							<div className="col-span-1 justify-center my-auto">
								<h2 className="font-bold text-4xl">Custom questions</h2>
								<p className="text-xl mt-2">
									With premium, you can <b>add your own</b> questions to the
									bot. Add fun questions you came up with, or inside jokes with
									your friends! You can also disable the global question list so
									the bot only shows the questions you created.
								</p>
							</div>
							<div className="col-span-1 justify-center hidden md:block">
								<CustomQuestionsExample />
							</div>
						</Fade>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 justify-center my-12 md:my-24 text-left max-w-7xl gap-12 px-8 mx-auto">
						<Fade bottom>
							<div className="col-span-1 justify-center p-4 my-auto hidden md:block select-none">
								<DisableDefaultsExample />
							</div>
							<div className="col-span-1 justify-center my-auto">
								<h2 className="font-bold text-4xl">
									Disable default questions
								</h2>
								<p className="text-xl mt-2">
									Don&apos;t like a question in the bot? You can disable it in
									your server with premium!
								</p>
							</div>
						</Fade>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 justify-center my-12 md:my-24 text-left max-w-7xl gap-12 px-8 mx-auto">
						<Fade bottom>
							<div className="col-span-1 justify-center my-auto">
								<h2 className="font-bold text-4xl">
									Custom paranoia frequency
								</h2>
								<p className="text-xl mt-2">
									Want questions to always be revealed? With premium, you can
									customize how often the question will be revealed when playing
									paranoia!
								</p>
							</div>
							<div className="col-span-1 justify-center my-auto p-4 dark:bg-theme-d2 bg-white rounded-md hidden md:block">
								<CustomParanoiaExample />
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
}
