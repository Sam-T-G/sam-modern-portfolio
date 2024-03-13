import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="text-slate-100 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex font-medium items-center mb-4 md:mb-0">
					<svg
						className="w-8 h-8 ml-1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 250 250">
						<path
							fill="#9c9c9c"
							stroke="#9c9c9c"
							d="M177.71 19.25C174.273 124.668 113.474 199.205 16 217.502c-4.675.878-9.512 1.807-10.75 2.066-2.208.461-2.25.74-2.25 14.951V249h2.757c7.508 0 29.972-7.993 44.243-15.741 44.548-24.188 75.563-55.251 122.407-122.593 16.568-23.819 24.996-34.097 38.165-46.542 11.167-10.554 27.975-22.177 34.854-24.103L250 38.74V2h-71.727l-.563 17.25"
							fill-rule="evenodd"></path>
						<path
							fill="#fcfcfc"
							stroke="#fcfcfc"
							d="M178 15.449c0 45.445-15.628 95.51-40.191 128.757-30.602 41.42-71.853 65.103-131.059 75.242l-3.75.643v13.954C3 241.72 3.287 248 3.637 248c1.163 0 37.652-19.227 50.825-26.781 16.767-9.614 22.469-13.478 37.038-25.095 32.09-25.587 47.814-45.203 69.038-86.124 30.996-59.763 52.241-86.531 82.247-103.631L250.452 2H178v13.449"
							fill-rule="evenodd"></path>
						<path
							fill="#46494b"
							stroke="#46494b"
							d="M178.609 16.75C173.47 125.962 115.282 198.356 17.07 217.726L3.003 220.5l-.002 13.837L3 248.173l17.624-9.153c38.659-20.078 53.373-29.1 72.123-44.219 31.003-25 46.332-44.341 67.458-85.115 30.347-58.568 53.686-87.754 83.503-104.424l5.792-3.238-35.098-.012L179.303 2l-.694 14.75"
							fill-rule="evenodd"></path>
					</svg>
					<h1 className="ml-3 text-2xl cursor-pointer">Sam Gerungan</h1>
				</a>
				<nav className="md:ml-auto flex flex-wrap items-center justify-center">
					<Link href="/">
						<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
							Home
						</span>
					</Link>
					<Link href="/about">
						<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
							About
						</span>
					</Link>
					<Link href="/contact">
						<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
							Contact
						</span>
					</Link>
				</nav>
				<Link href="/projects">
					<button className="inline-flex items-center border-indigo-600 border-4 bg-white text-indigo-600 font-semibold py-1 px-3 focus:outline-none hover:bg-indigo-600 transform transition-transform hover:scale-110 hover:text-white rounded-lg text-base mt-4 md:mt-0">
						Projects
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
