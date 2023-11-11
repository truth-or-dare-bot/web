import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

export default function PremiumPricingPlan({
	planId,
	planName,
	planDescription,
	planFeatures,
	price,
	className,
	themeColor,
	clickEvent,
	planCycle = "Per Month",
	buttonLabel = "Purchase Now",
	disabled = false,
}) {
	return (
		<div className={"bg-clip rounded-lg p-1 shadow-lg transition hover:scale-[102%] " + className}>
			<div className="h-full rounded-md bg-white px-6 py-8 text-center dark:bg-theme-d1">
				<div className="mb-6 flex flex-col items-center">
					<div className={"mb-1 bg-clip-text text-4xl " + themeColor}>
						<FontAwesomeIcon icon={faCrown} />
					</div>
					<h2 className="text-2xl font-semibold">{planName}</h2>
					<p className="text-lg dark:text-gray-200">{planDescription}</p>
				</div>
				<div className="inline-block border-t border-b py-3">
					{planFeatures.map((f, index) => (
						<p className="py-0.5 text-lg" key={index}>
							{f}
						</p>
					))}
				</div>
				<div className="mt-6">
					<p className="text-4xl font-bold">${price}</p>
					<p className="text-md dark:text-gray-200">USD {planCycle}</p>
				</div>
				<div className="mt-4">
					<Button
						onClick={() => disabled || clickEvent({ planId, planName, price })}
						className={"border-none !text-white hover:opacity-70 " + className}>
						{buttonLabel}
					</Button>
				</div>
			</div>
		</div>
	);
}
