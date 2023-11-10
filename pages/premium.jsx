import { faBook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Fade } from "react-reveal";

import Button from "../components/Button";
import OpenGraph from "../components/OpenGraph";
import PremiumPricingPlan from "../components/PremiumPricingPlan";
import PremiumSuccessModal from "../components/PremiumSuccessModal";
import ScreenOverlay from "../components/ScreenOverlay";
import { useUserContext } from "../context/auth";
import CheckoutModal from "../components/CheckoutModal";

const CustomQuestionsExample = dynamic(async () => await import("../components/examples/CustomQuestions"), {
	ssr: false,
});

const RepeatPreventionExample = dynamic(async () => await import("../components/examples/RepeatPrevention"), {
	ssr: false,
});

const DisableDefaultsExample = dynamic(async () => await import("../components/examples/DisableDefaults"), {
	ssr: false,
});

const CustomParanoiaExample = dynamic(async () => await import("../components/examples/CustomParanoia"), {
	ssr: false,
});

const premiumPlans = [
	{
		planId: "one-server-USD-Monthly",
		planName: "Premium 1x",
		planDescription: "Premium features for one server of your choice!",
		planFeatures: [
			"One premium server",
			"No Repeated Questions",
			"Unlimited custom questions",
			"Disable default questions",
			"Custom paranoia frequency",
			"Priority support",
		],
		serverCount: 1,
		price: 2.99,
	},
	{
		planId: "three-servers-USD-Monthly",
		planName: "Premium 3x",
		planDescription: "Premium features for three servers of your choice!",
		planFeatures: [
			"Three premium servers",
			"No Repeated Questions",
			"Unlimited custom questions",
			"Disable default questions",
			"Custom paranoia frequency",
			"Priority support",
		],
		serverCount: 3,
		price: 7.99,
	},
	{
		planId: "custom-bot-USD-Monthly",
		planName: "Custom Bot",
		planDescription: "A premium Truth or Dare bot with your server's branding!",
		planFeatures: [
			"Custom avatar & username",
			"No Repeated Questions",
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
	const [showSuccessModal, setSuccessModal] = useState(false);
	const [showCheckoutModal, setCheckoutModal] = useState(false);
	const [checkoutPlanId, setCheckoutPlanId] = useState();
	const [transaction, setTransaction] = useState(null);
	const [userState, setUser] = useUserContext();

	async function openCheckout({ planId }) {
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

		if (res.ok) {
			const user = await res.json();
			if (user) {
				setUser(user);
			}
		}

		setLoad({
			show: false,
			type: "",
			message: "",
		});
		setCheckoutPlanId(planId);
		setCheckoutModal(true);
	}

	async function openChargebee() {
		const planId = checkoutPlanId;

		setCheckoutModal(false);
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
				}).then(res => res.json());
			},
			loaded: () => {},
			success: async hostedPageId => {
				setLoad({
					show: true,
					type: "load",
					message: "Processing your purchase...",
				});
				const capture = await fetch(`/api/chargebee/capture/${hostedPageId}`)
					.then(res => res.json())
					.catch(_ => null);
				if (!capture) return (this.view = "error");
				setSuccessModal(true);
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
			error: error => {
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
		const cb = cbInstance || window.Chargebee.init({ site: "truthordarebot", iframeOnly: true });
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
			<PremiumSuccessModal show={showSuccessModal} transaction={transaction} state={setSuccessModal} />
			<CheckoutModal
				show={showCheckoutModal}
				openCheckout={openChargebee}
				setShow={setCheckoutModal}
				user={userState}
				plan={premiumPlans.find(p => p.planId === checkoutPlanId)}
			/>
			<div className="flex flex-col pb-8 md:pb-32">
				<div className="premiumHeader pt-24 pb-24">
					<div className="mx-auto px-6 md:mt-24">
						<div className="text-center text-white">
							<h1 className="text-6xl font-extrabold">Truth or Dare Premium</h1>
							<h2 className="mt-2 text-3xl">Unlock premium features and support the development of the bot!</h2>
							<div className="mt-4">
								<Button
									href="https://docs.truthordarebot.xyz/premium-docs"
									className="px-4 py-2 !text-white"
									external
									icon={faBook}>
									Premium Docs
								</Button>
								<Button
									onClick={openManagementPortal}
									className="mt-2 px-4 py-2 !text-white sm:ml-2 sm:mt-0"
									icon={faCartShopping}>
									Manage Subscription
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-2 mt-16">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="bg-gradient-to-r from-violet-600 to-red-500 bg-clip-text text-5xl font-extrabold text-transparent">
							Premium Plans
						</h1>
					</div>
					<div
						className="mx-auto mt-8 flex max-w-7xl flex-col justify-center gap-8 px-4 md:flex-row"
						style={{ flex: "1 1 0px" }}>
						{premiumPlans.map((props, index) => (
							<div className="flex-1" key={index}>
								<Fade bottom delay={index * 150}>
									<PremiumPricingPlan clickEvent={openCheckout} {...props} />
								</Fade>
							</div>
						))}
					</div>
				</div>
				<div className="mx-2 mt-32">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="bg-gradient-to-r from-violet-600 to-red-500 bg-clip-text text-5xl font-extrabold text-transparent">
							Premium Perks
						</h1>
					</div>
					<div className="my-12 mx-auto grid max-w-7xl grid-cols-1 justify-center gap-12 px-8 text-left md:my-24 md:grid-cols-2">
						<Fade bottom>
							<div className="col-span-1 my-auto justify-center">
								<h2 className="text-4xl font-bold">Custom questions</h2>
								<p className="mt-2 text-xl">
									With premium, you can <b>add your own</b> questions to the bot. Add fun questions you came up with, or
									inside jokes with your friends! You can also disable the global question list so the bot only shows
									the questions you created.
								</p>
							</div>
							<div className="col-span-1 hidden justify-center md:block">
								<CustomQuestionsExample />
							</div>
						</Fade>
					</div>
					<div className="my-12 mx-auto grid max-w-7xl grid-cols-1 justify-center gap-12 px-8 text-left md:my-24 md:grid-cols-2">
						<Fade bottom>
							<div className="col-span-1 hidden justify-center md:block">
								<RepeatPreventionExample />
							</div>
							<div className="col-span-1 my-auto justify-center">
								<h2 className="text-4xl font-bold">Repeat prevention</h2>
								<p className="mt-2 text-xl">
									Bored of repeated questions? Repeat prevention is activated in all premium servers! You{" "}
									<b>won&apos;t get a repeated question</b> until you&apos;ve been through the entire question list.
								</p>
							</div>
						</Fade>
					</div>
					<div className="my-12 mx-auto grid max-w-7xl grid-cols-1 justify-center gap-12 px-8 text-left md:my-24 md:grid-cols-2">
						<Fade bottom>
							<div className="col-span-1 my-auto justify-center">
								<h2 className="text-4xl font-bold">Disable default questions</h2>
								<p className="mt-2 text-xl">
									Don&apos;t like a question in the bot? You can <b>disable it</b> in your server with premium!
								</p>
							</div>
							<div className="col-span-1 my-auto hidden select-none justify-center p-4 md:block">
								<DisableDefaultsExample />
							</div>
						</Fade>
					</div>
					<div className="my-12 mx-auto grid max-w-7xl grid-cols-1 justify-center gap-12 px-8 text-left md:my-24 md:grid-cols-2">
						<Fade bottom>
							<div className="col-span-1 my-auto hidden justify-center rounded-md bg-white p-4 dark:bg-theme-d2 md:block">
								<CustomParanoiaExample />
							</div>
							<div className="col-span-1 my-auto justify-center">
								<h2 className="text-4xl font-bold">Custom paranoia frequency</h2>
								<p className="mt-2 text-xl">
									Want questions to <b>always</b> be revealed? With premium, you can customize how often the question
									will be revealed when playing paranoia!
								</p>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
}
