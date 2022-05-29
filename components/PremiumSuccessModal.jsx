import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PremiumSuccessModal({ show = false, transaction, state }) {
	return (
		<div
			className={`fixed inset-0 z-[999] bg-black/60 w-full h-full overflow-hidden flex items-center justify-center ${
				show ? "" : "hidden"
			}`}>
			<div className="flex flex-col items-center">
				<div className="mx-4">
					<div className="bg-white p-6 text-black rounded-lg mx-auto max-w-2xl relative">
						<button
							className="rounded-full absolute top-0 right-0 bg-red-400 text-red-900 w-8 h-8 -mt-2 -mr-2 flex items-center justify-center"
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
							<h2 className="text-lg font-semibold mt-4">Activation Instructions</h2>
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
