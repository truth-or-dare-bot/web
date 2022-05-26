import Button from "../components/Button";
import dynamic from "next/dynamic";
import Divider from "../components/Divider";
import Fade from "react-reveal";
import Image from "next/image";
// @ts-ignore
import GamesImage from "../assets/img/games.svg";
import QuestionListExample from "../components/QuestionListExample";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const DiscordHeroExample = dynamic(
	async () => await import("../components/DiscordHeroExample"),
	{ ssr: false }
);

const DiscordFriendsExample = dynamic(
	async () => await import("../components/DiscordFriendsExample"),
	{ ssr: false }
);

export default function IndexPage() {
	return (
		<div>
			<div className="backgroundCurves fixed top-0 w-screen h-screen z-[-999]"></div>
			<div className="flex flex-col mt-24">
				{/* Index Hero */}
				<div className="flex-grow" style={{ minHeight: "70vh" }}>
					<div className="md:px-24 container px-6 mx-auto mb-20">
						<div className="lg:grid-cols-2 md:mt-24 grid grid-cols-1 gap-4">
							<div className="flex flex-col">
								<h1
									className="md:leading-tight font-extrabold leading-none"
									style={{ fontSize: "3rem" }}
								>
									Play <br className="sm:hidden" />
									<span className="text-discord-blurple">Truth</span> or{" "}
									<span className="text-discord-red">Dare</span>{" "}
									<br className="" />
									in your{" "}
									<span className="text-discord-blurple">
										<br className="sm:hidden" />
										Discord
									</span>{" "}
									server!
								</h1>
								<div className="md:text-3xl my-4 text-2xl dark:text-gray-100 text-gray-800">
									Featuring <b>thousands</b> of questions and used in over{" "}
									<b>half a million</b> communities.
								</div>
								<div className="mt-2">
									<Button href="/invite" external icon={faDiscord}>
										Add Truth or Dare
									</Button>
									<Button
										href="/support"
										className="sm:ml-2 sm:mt-0 mt-2"
										external
										icon={faUserGroup}
									>
										Find Other Players
									</Button>
								</div>
							</div>
							<div className="flex-col mx-12 hidden lg:flex">
								<DiscordHeroExample />
							</div>
						</div>
					</div>
				</div>
				<Divider type="curveUp" className="dark:fill-theme-d4 fill-theme-l2" />
				{/* Features */}
				<div className="dark:bg-theme-d4 bg-theme-l2 py-6 md:py-12">
					<div className="grid grid-cols-1 md:grid-cols-2 justify-center my-12 md:my-24 text-left max-w-7xl gap-12 px-8 mx-auto">
						<Fade bottom>
							<div className="col-span-1 justify-center my-auto">
								<h2 className="font-bold text-4xl">
									Get to know your friends!
								</h2>
								<p className="text-xl mt-2">
									Truth or Dare Bot is <b>designed</b> to make conversations
									with your friends more fun and exciting. It&apos;s a great way
									to hang out, spend time, and learn more about each other!
								</p>
							</div>
							<div className="col-span-1 justify-center hidden md:block">
								<DiscordFriendsExample />
							</div>
						</Fade>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 justify-center my-12 md:my-24 text-left max-w-7xl gap-12 px-8 mx-auto">
						<Fade bottom>
							<div className="col-span-1 justify-center p-4 my-auto hidden md:block select-none">
								<Image
									src={GamesImage}
									alt="Image showing the different kinds of questions the bot has"
									width="497"
									height="203"
									draggable="false"
								/>
							</div>
							<div className="col-span-1 justify-center my-auto">
								<h2 className="font-bold text-4xl">
									Multiple games and modes!
								</h2>
								<p className="text-xl mt-2">
									You can play <b>Truth or Dare</b>, <b>Would You Rather</b>,{" "}
									<b>Never Have I Ever</b>, and <b>Paranoia</b> (most likely to)
									with this bot! Each game also has <b>PG</b>, <b>PG13</b>, and{" "}
									<b>R</b> rated modes.
								</p>
							</div>
						</Fade>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 justify-center my-12 md:my-24 text-left max-w-7xl gap-12 px-8 mx-auto">
						<Fade bottom>
							<div className="col-span-1 justify-center my-auto">
								<h2 className="font-bold text-4xl">Thousands of questions!</h2>
								<p className="text-xl mt-2">
									Truth or Dare Bot has <b>thousands</b> of questions for you
									and your friends to answer! Our questions cover many topics
									from relationships and personal ones to everything else.
								</p>
							</div>
							<div className="col-span-1 justify-center my-auto p-4 dark:bg-theme-d2 bg-white rounded-md hidden md:block">
								<QuestionListExample />
							</div>
						</Fade>
					</div>
				</div>
				<Divider
					type="curveDown"
					className="dark:fill-theme-d4 dark:bg-theme-d3 fill-theme-l2 bg-theme-l3"
				/>
				{/* Get Started */}
				<div className="dark:bg-theme-d3 bg-theme-l3 pt-24 pb-56">
					<Fade bottom>
						<div className="max-w-4xl mx-auto text-center px-4">
							<h1 className="text-5xl font-extrabold">
								<Fade bottom cascade>
									Get Started
								</Fade>
							</h1>
							<p className="text-xl mt-2">
								Ready to play Truth or Dare? Join millions of players and invite
								the bot to your server!
								<br /> Don&apos;t have friends to play with? Join the Truth or
								Dare Community server!
							</p>
							<div className="mt-4">
								<Button href="/invite" external icon={faDiscord}>
									Add Truth or Dare
								</Button>
								<Button
									href="/support"
									className="sm:ml-2 sm:mt-0 mt-2"
									external
									icon={faUserGroup}
								>
									Find Other Players
								</Button>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
}
