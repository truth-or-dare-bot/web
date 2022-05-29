import Button from "./Button";

export default function PremiumPricingPlan({
	planId,
	planName,
	planDescription,
	planFeatures,
	price,
	clickEvent,
	planCycle = "Per Month",
	buttonLabel = "Purchase Now",
	disabled = false,
}) {
	return (
		<div className="rounded-lg bg-gradient-to-r from-violet-600 to-red-500 bg-clip p-1 shadow-lg">
			<div className="px-6 py-8  h-full dark:bg-theme-d1 bg-white rounded-md text-center">
				<div className="mb-6">
					<h2 className="text-2xl font-semibold">{planName}</h2>
					<p className="text-lg dark:text-gray-200">{planDescription}</p>
				</div>
				<div className="py-3 border-t border-b inline-block">
					{planFeatures.map((f, index) => (
						<p className="text-lg py-0.5" key={index}>
							{f}
						</p>
					))}
				</div>
				<div className="mt-6">
					<p className="text-4xl font-bold">${price}</p>
					<p className="text-md dark:text-gray-200">USD {planCycle}</p>
				</div>
				<div className="mt-4">
					<Button onClick={() => disabled || clickEvent({ planId, planName, price })}>{buttonLabel}</Button>
				</div>
			</div>
		</div>
	);
}
