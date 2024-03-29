import React from "react";

const Footer = () => {
	return (
		<footer className="text-slate-200 body-font">
			<div className="container px-5 py-8 mx-auto flex flex-col justify-between items-center sm:flex-row">
				<a className="flex title-font font-medium items-center md:justify-start justify-center text-slate-100">
					<svg
						className="w-8 h-8"
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="200.000000pt"
						height="202.000000pt"
						viewBox="0 0 200.000000 202.000000"
						preserveAspectRatio="xMidYMid meet">
						{" "}
						<g
							transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)"
							fill="#4f46e5"
							stroke="none">
							{" "}
							<path d="M889 1857 c-155 -95 -453 -277 -540 -330 -153 -94 -219 -178 -219 -282 l0 -51 82 -50 c45 -27 100 -60 122 -73 63 -36 212 -126 301 -180 149 -91 300 -179 337 -197 l37 -17 83 50 c46 28 106 63 133 78 28 15 56 32 63 38 16 13 16 65 -1 82 -7 7 -112 72 -233 145 -257 155 -287 176 -308 212 -40 67 -8 112 140 197 58 34 107 61 109 61 2 0 104 -61 227 -135 123 -74 230 -135 239 -135 19 0 291 171 296 186 2 6 -56 47 -129 91 -73 43 -215 128 -315 189 -266 159 -307 184 -314 184 -4 0 -53 -29 -110 -63z"></path>{" "}
							<path d="M935 1404 c-74 -39 -92 -59 -87 -95 5 -33 10 -37 172 -132 212 -123 364 -217 371 -228 9 -16 -1 -88 -17 -120 -18 -37 -72 -81 -156 -130 -40 -23 -101 -59 -135 -80 -34 -22 -68 -39 -74 -39 -11 0 -98 51 -284 167 -44 27 -152 94 -240 148 -88 54 -199 122 -246 151 -47 30 -91 54 -98 54 -7 0 -11 -30 -11 -93 0 -109 -4 -103 115 -169 44 -25 118 -69 165 -98 47 -29 110 -67 140 -85 30 -17 140 -82 243 -144 151 -90 194 -112 215 -108 15 3 69 31 120 61 51 31 96 56 99 56 3 0 20 11 37 23 17 13 81 52 141 86 61 35 146 85 190 112 44 27 128 76 188 110 l107 62 0 151 0 151 -31 18 c-41 23 -59 22 -105 -10 -21 -14 -64 -40 -94 -56 -30 -16 -62 -36 -71 -43 -8 -8 -22 -14 -29 -14 -12 0 -371 209 -492 286 -55 35 -77 37 -133 8z"></path>{" "}
							<path d="M1849 811 c-13 -10 -46 -30 -74 -46 -27 -15 -93 -53 -145 -85 -383 -230 -620 -370 -631 -370 -11 0 -143 77 -626 367 -122 73 -227 133 -233 133 -6 0 -10 -40 -10 -110 0 -129 -28 -99 230 -250 102 -60 199 -118 215 -128 154 -97 410 -242 428 -242 13 0 55 20 94 44 39 24 75 45 80 47 4 2 60 35 123 73 63 38 140 84 170 101 30 18 116 69 190 115 74 46 156 95 182 109 l48 26 0 112 c0 61 -4 114 -9 117 -5 3 -19 -3 -32 -13z"></path>{" "}
						</g>{" "}
					</svg>
					<span className="ml-3 text-xl">Sam Gerungan</span>
				</a>
				<p className="text-sm text-slate-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					© 2024 Samuel Gerungan —
					<a
						href="https://github.com/Sam-T-G"
						className="text-cyan-200 ml-1"
						rel="noopener noreferrer"
						target="_blank">
						@sam-t-g
					</a>
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<a
						href="https://github.com/Sam-T-G"
						target="_blank"
						className="ml-3 text-gray-500">
						<svg
							className="w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							height="14"
							width="13.5625"
							viewBox="0 0 496 512">
							<path
								fill="#6b7280"
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
							/>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/samuel-gerungan-375b40ab/"
						target="_blank"
						className="ml-3 text-gray-500">
						<svg
							fill="currentColor"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="0"
							className="w-5 h-5"
							viewBox="0 0 24 24">
							<path
								stroke="none"
								d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</a>
					<a
						href="https://www.instagram.com/samuel_gerungan/"
						target="_blank"
						className="ml-3 text-gray-500">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24">
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
						</svg>
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
