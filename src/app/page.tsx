import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<>
			<main className="text-gray-800 bg-white body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<p className="hidden lg:block font-semibold text-xl text-indigo-600 my-1 tracking-wide">
							Software Engineer
						</p>
						<h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold tracking-tight">
							Samuel Gerungan
						</h1>
						<p className="my-1 leading-relaxed ml-1">
							An eye for design, passion for innovation, and meticulous
							attention to detail
						</p>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<Image
							className="object-contain object-center rounded-3xl"
							alt="hero-image"
							src="/self-portrait.jpg"
							width={600}
							height={720}
							priority
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
