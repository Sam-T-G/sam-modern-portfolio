import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="text-slate-100 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex font-medium items-center mb-4 md:mb-0">
					<h1 className="ml-3 text-2xl hover:text-cyan-500 cursor-pointer">
						Sam Gerungan
					</h1>
				</a>
				<nav className="md:ml-auto flex flex-wrap items-center justify-center">
					<Link href="/">
						<span className="flex mr-5 hover:text-cyan-500 cursor-pointer">
							Home
						</span>
					</Link>
					<Link href="/about">
						<span className="flex mr-5 hover:text-cyan-500 cursor-pointer">
							About
						</span>
					</Link>
					<Link href="/contact">
						<span className="flex mr-5 hover:text-cyan-500 cursor-pointer">
							Contact
						</span>
					</Link>
				</nav>
				<Link href="/projects">
					<button className="inline-flex items-center bg-gray-100 text-cyan-800 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-500 hover:text-white rounded text-base mt-4 md:mt-0">
						Projects
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
