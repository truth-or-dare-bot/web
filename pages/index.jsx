import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Image from "next/image";
import Fade from "react-reveal";

// @ts-ignore
import GamesImage from "../assets/img/games.svg";
import Button from "../components/Button";
import Divider from "../components/Divider";
import QuestionListExample from "../components/examples/QuestionList";

const DiscordHeroExample = dynamic(async () => await import("../components/examples/InteractiveHero"), { ssr: false });

const DiscordFriendsExample = dynamic(async () => await import("../components/examples/Friends"), { ssr: false });

export default function IndexPage() {
	return (
		<div>
			<div className="indexBackground fixed top-0 z-[-999] h-screen w-screen"></div>
			<div className="mt-24 flex flex-col">
				{/* Index Hero */}
				<div style={{ minHeight: "70vh" }}>
					<div className="container mx-auto mb-20 px-6 xl:px-24">
						<div className="grid grid-cols-1 gap-4 md:mt-24 lg:grid-cols-2">
							<div className="flex flex-col">
								<h1 className="font-extrabold leading-none md:leading-tight" style={{ fontSize: "3rem" }}>
									Play <br className="sm:hidden" />
									<span className="text-discord-blurple">Truth</span> or <span className="text-discord-red">Dare</span>{" "}
									<br className="" />
									in your{" "}
									<span className="text-discord-blurple">
										<br className="sm:hidden" />
										Discord
									</span>{" "}
									server!
								</h1>
								<div className="my-4 text-2xl text-gray-800 dark:text-gray-100 md:text-3xl">
									Featuring <b>thousands</b> of questions and used in over <b>half a million</b> communities.
								</div>
								<div className="mt-2">
									<Button href="/invite" external icon={faDiscord}>
										Add Truth or Dare
									</Button>
									<Button href="/support" className="mt-2 sm:ml-2 sm:mt-0" external icon={faUserGroup}>
										Find Other Players
									</Button>
								</div>
							</div>
							<div className="mx-12 hidden flex-col lg:flex">
								<DiscordHeroExample />
							</div>
						</div>
					</div>
				</div>
				<Divider type="curveUp" className="fill-theme-l2 dark:fill-theme-d4" />
				{/* Features */}
				<div className="bg-theme-l2 py-6 dark:bg-theme-d4 md:py-12">
					<div className="my-12 mx-auto grid max-w-7xl grid-cols-1 justify-center gap-12 px-8 text-left md:my-24 md:grid-cols-2">
						<Fade bottom>
							<div className="col-span-1 my-auto justify-center">
								<h2 className="text-4xl font-bold">Get to know your friends!</h2>
								<p className="mt-2 text-xl">
									Truth or Dare Bot is <b>designed</b> to make conversations with your friends more fun and exciting.
									It&apos;s a great way to hang out, spend time, and learn more about each other!
								</p>
							</div>
							<div className="col-span-1 hidden justify-center md:block">
								<DiscordFriendsExample />
							</div>
						</Fade>
					</div>
					<div className="my-12 mx-auto grid max-w-7xl grid-cols-1 justify-center gap-12 px-8 text-left md:my-24 md:grid-cols-2">
						<Fade bottom>
							<div className="col-span-1 my-auto hidden select-none justify-center p-4 md:block">
								<Image
									src={GamesImage}
									alt="Image showing the different kinds of questions the bot has"
									width="497"
									height="203"
									draggable="false"
								/>
							</div>
							<div className="col-span-1 my-auto justify-center">
								<h2 className="text-4xl font-bold">Multiple games and modes!</h2>
								<p className="mt-2 text-xl">
									You can play <b>Truth or Dare</b>, <b>Would You Rather</b>, <b>Never Have I Ever</b>, and{" "}
									<b>Paranoia</b> (most likely to) with this bot! Each game also has <b>PG</b>, <b>PG13</b>, and{" "}
									<b>R</b> rated modes.
								</p>
							</div>
						</Fade>
					</div>
					<div className="my-12 mx-auto grid max-w-7xl grid-cols-1 justify-center gap-12 px-8 text-left md:my-24 md:grid-cols-2">
						<Fade bottom>
							<div className="col-span-1 my-auto justify-center">
								<h2 className="text-4xl font-bold">Thousands of questions!</h2>
								<p className="mt-2 text-xl">
									Truth or Dare Bot has <b>thousands</b> of questions for you and your friends to answer! Our questions
									cover many topics from relationships and personal ones to everything else.
								</p>
							</div>
							<div className="col-span-1 my-auto hidden justify-center rounded-md bg-white p-4 dark:bg-theme-d2 md:block">
								<QuestionListExample />
							</div>
						</Fade>
					</div>
				</div>
				<Divider type="curveDown" className="bg-theme-l3 fill-theme-l2 dark:bg-theme-d3 dark:fill-theme-d4" />
				{/* Get Started */}
				<div className="bg-theme-l3 pt-24 pb-8 dark:bg-theme-d3 md:pb-56">
					<Fade bottom>
						<div className="mx-auto max-w-4xl px-4 text-center">
							<h1 className="text-5xl font-extrabold">
								<Fade bottom cascade>
									Get Started
								</Fade>
							</h1>
							<p className="mt-2 text-xl">
								Ready to play Truth or Dare? Join millions of players and invite the bot to your server!
								<br /> Don&apos;t have friends to play with? Join the Truth or Dare Community server!
							</p>
							<div className="mt-4">
								<Button href="/invite" external icon={faDiscord}>
									Add Truth or Dare
								</Button>
								<Button href="/support" className="mt-2 sm:ml-2 sm:mt-0" external icon={faUserGroup}>
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
