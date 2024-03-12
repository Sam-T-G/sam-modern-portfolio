import React from "react";
import {
	CheckBadgeIcon,
	GlobeAltIcon,
	ViewfinderCircleIcon,
} from "@heroicons/react/20/solid";

const features = [
	{
		name: "Expanded professional experience in marketing.",
		description:
			"Working for over six years as a professional photographer and marketing specialist, I've helped clients increase their sales figures through effective rebranding, refining their product, or revolutionizing their online presence.",
		icon: CheckBadgeIcon,
	},
	{
		name: "Adept and refined visual taste.",
		description:
			"Through the lens of both my physical camera and my experience in the quickly evolving online market, I have a vibrant knowledge and sense of awareness on the latest trends and visual tastes that convert attention of the modern-day consumer.",
		icon: ViewfinderCircleIcon,
	},
	{
		name: "Rich deep training in the arts.",
		description:
			"From being classically trained in the arts and having performed for prestigious organizations both domestically and internationally, I've been trained and have been shaped by many artistic and differing cultural disciplines, that have been monumental in refining the level of detail and worth ethic I embody today.",
		icon: GlobeAltIcon,
	},
];

const About: React.FC = () => {
	return (
		<main className="text-slate-100 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<p className="hidden lg:block text-xl my-1">About Me</p>
					<h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium">
						Samuel Timothy Gerungan
					</h1>
					<p className="my-1 leading-relaxed ml-1"></p>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-contain object-center rounded-3xl"
						alt="hero-image"
						src="/your-image.jpg"
					/>
				</div>
			</div>
			<div className="overflow-hidden bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div className="lg:pr-8 lg:pt-4">
							<div className="lg:max-w-lg">
								<h2 className="text-base font-semibold leading-7 text-indigo-600">
									Formal and Professional Background
								</h2>
								<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									A rich background in the arts
								</p>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									I have worked in the field of photography and advertising for
									over six years. Self taught in the visual arts and with over 9
									years of formal training in many musical disciplines, I have
									capitalized on my artistic talents and training to bring
									together high quality products with a meticulous attention to
									detail.
								</p>
								<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
									{features.map((feature) => (
										<div key={feature.name} className="relative pl-9">
											<dt className="inline font-semibold text-gray-900">
												<feature.icon
													className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
													aria-hidden="true"
												/>
												{feature.name}
											</dt>{" "}
											<dd className="inline">{feature.description}</dd>
										</div>
									))}
								</dl>
							</div>
						</div>
						<div>
							<img
								src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
								alt="Product screenshot"
								className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
								width={2432}
								height={1442}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
