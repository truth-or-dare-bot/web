import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PremiumSuccessModal({ show = false, transaction, state }) {
	return (
		<div
			className={`fixed inset-0 z-[999] flex h-full w-full items-center justify-center overflow-hidden bg-black/60 ${
				show ? "" : "hidden"
			}`}>
			<div className="flex flex-col items-center">
				<div className="mx-4">
					<div className="relative mx-auto max-w-2xl rounded-lg bg-white p-6 text-black">
						<button
							className="absolute top-0 right-0 -mt-2 -mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-400 text-red-900"
							onClick={_ => state(false)}>
							<FontAwesomeIcon icon={faXmark} />
						</button>
						<div>
							<h1 className="text-2xl font-semibold">Thank You! 🎉</h1>
							<p className="mt-1">
								Thank you so much for your donation. You now have <b>{transaction?.premiumSlots}</b> total premium
								slot(s)!
							</p>
							<p className="mt-1">
								A recept has been emailed to you. If you need purchase support, feel free to reach out in our{" "}
								<a href="/support" target="_blank" className="text-blue-500 hover:text-blue-600">
									support server
								</a>
								.
							</p>
							<h2 className="mt-4 text-lg font-semibold">Activation Instructions</h2>
							<p>
								Run &quot;/premium activate&quot; in a server of your choice! Do not hesitate to reach out to us if you
								have any questions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
