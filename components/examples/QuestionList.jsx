import { Parallax } from "react-scroll-parallax";

const questions = [
	"Who is your role model?",
	"Would you rather tell your most embarassing secret to the 10 people it would matter to most or eat 5000 liquorice jelly beans as fast as you can?",
	"Who's most likely to be in a cult?",
	"What are your first impressions of the person who ran this command?",
	"Would you rather eat a Big Mac every six hours or an exquisite meal once every four days?",
	"What's one thing you've done that people here would judge you for?",
	"Never have I ever spilled a huge secret.",
	"Who would have the most screen time on their phone?",
	"What's something you shouldn't have gotten in trouble for?",
	"Would you rather be known forever for something terrible or never be recognized something wonderful?",
	"Who's most likely to appear on 'My Strange Addiction?'",
	"Are you ticklish? If so, where?",
	"Would you rather stay in school for the next 30 years or leave school after 2nd grade?",
	"Would you rather pay more taxes but have free public services, or no taxes but pay fully for services you need?",
	"If you could only join one, would you rather have Facebook or Twitter?",
	"Who do you think has the messiest room?",
	"Would you rather always get caught in traffic or always have really bad internet?",
	"Would you rather never play computer games again or never watch any video on a computer again?",
	"Who's the worst actor here?",
	"Would you rather be stranded in the middle of an ocean on a raft OR be lost in the woods with no supplies?",
	"Do as many pushups or situps as you can in a minute.",
	"If you could be one person in this server for an hour, who would you be?",
	"Would you rather have a wardrobe completely of flannel/plaid or have a wardrobe completely of denim?",
	"Who here do you trust the most?",
	"What's one thing you'd like to do if there were no consequences?",
	"Would you rather be hysterically funny or absolutely beautiful?",
	"What is the most trouble that you ever got into in school?",
	"Tell your life story in two minutes.",
	"Never have I ever listened to a song more than 50 times in a day",
	"Do you eat dry pasta?",
	"If you could have any superpower, what would you choose?",
	"Who's your idol?",
	"Have you ever been grounded?",
	"Who's the dumbest here?",
	"If you could get one of your teachers/managers/bosses fired, who would it be?",
	"Would you rather be an anti-social genuis or or be a popular but unintelligent  ?",
	"If you could take away one bad thing in the world, what would it be?",
	"Have you ever used your lunch money for something other than lunch?",
	"Do you sleep with a stuffed animal?",
	"Math or science?",
];

export default function QuestionListExample() {
	return (
		<div className="h-72 overflow-hidden select-none">
			<Parallax speed={-30}>
				{questions.map(q => (
					<p key={q} className="text-xl whitespace-nowrap dark:odd:text-gray-300 odd:text-gray-600  mt-1 font-mono">
						{q}
					</p>
				))}
			</Parallax>
		</div>
	);
}
