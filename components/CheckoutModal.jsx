import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCrown, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutModal({ show = false, setShow, user, openCheckout, plan }) {
	return (
		<div
			className={`fixed inset-0 z-[999] flex h-full w-full items-center justify-center overflow-hidden bg-black/80 ${
				show ? "" : "hidden"
			}`}>
			<div className="flex flex-col items-center">
				<div className="mx-4">
					<div className="relative mx-auto max-w-3xl overflow-hidden rounded-md bg-white text-black">
						<button className="absolute top-2 right-4 text-2xl text-gray-500" onClick={_ => setShow(false)}>
							<FontAwesomeIcon icon={faXmark} />
						</button>
						<div className="flex flex-col sm:flex-row">
							<div className="flex flex-col gap-2 p-8">
								<h1 className="text-2xl">🛒 Checkout</h1>
								<div>
									<p>
										We&apos;re so excited to activate your premium features! Log in with the Discord account you would
										like to activate from.
									</p>
									<p className="mt-4">
										Please join our{" "}
										<a
											href="/support"
											className="text-blue-500 hover:text-blue-600"
											target="_blank"
											rel="noopener noreferrer">
											support server
										</a>{" "}
										if you run into issues or have any concerns.
									</p>
								</div>
								<div className="mt-auto pt-4 text-sm">
									<p>
										{" "}
										By checking out, you agree to our{" "}
										<a
											href="/terms"
											className="text-blue-500 hover:text-blue-600"
											target="_blank"
											rel="noopener noreferrer">
											refund policy
										</a>{" "}
										and{" "}
										<a
											href="/privacy"
											className="text-blue-500 hover:text-blue-600"
											target="_blank"
											rel="noopener noreferrer">
											privacy policy
										</a>
										. Payments are securely processed by ChargeBee.
									</p>
								</div>
							</div>
							<div className="flex-shrink-0 bg-gray-100 p-6 sm:pt-16">
								<div className="flex h-16 w-full flex-row items-center overflow-hidden rounded-md">
									<div className={"flex text-4xl " + plan?.themeColor}>
										<FontAwesomeIcon icon={faCrown} />
									</div>
									<div className="flex-shrink-0 flex-grow pl-4">
										<h2 className="font-semibold">Premium</h2>
										<p className="text-sm text-gray-800">
											{plan?.serverCount} server{plan?.serverCount > 1 ? "s" : ""}
										</p>
									</div>
									<div className="flex-shrink-0 pl-6 text-right">
										<h2 className="font-semibold">${plan?.price}</h2>
										<p className="text-sm leading-tight text-gray-800">per month</p>
									</div>
								</div>
								<div className="my-4 h-[1px] bg-black"></div>
								<div className="flex flex-row">
									<div className="">Total</div>
									<div className="ml-auto">${plan?.price}/mo</div>
								</div>
								<div className="mt-12 sm:mt-24">
									<div className="mt-4">
										{user != null ? (
											<div>
												<div className="flex w-full items-center text-sm">
													{user?.avatar ? (
														<Image
															src={`https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.webp`}
															alt="Your avatar"
															width={16}
															height={16}
															className="rounded-full"
														/>
													) : null}
													<span className="ml-1">{user?.username}</span>
													<a href="/api/logout" className="ml-auto text-red-500">
														not you?
													</a>
												</div>
												<button
													className="mt-1 w-full rounded-lg bg-orange-400 px-4 py-2 text-white transition hover:bg-orange-400/80"
													onClick={() => openCheckout()}>
													<FontAwesomeIcon icon={faLock} /> <span className="ml-1">Secure Checkout</span>
												</button>
											</div>
										) : (
											<div>
												<div className="text-sm">Please log in to continue.</div>
												<a
													href="/api/login"
													className="mt-1 block w-full rounded-lg bg-indigo-500 px-4 py-2 text-center text-white transition hover:bg-indigo-500/80">
													<FontAwesomeIcon icon={faDiscord} /> <span className="ml-1">Login with Discord</span>
												</a>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
