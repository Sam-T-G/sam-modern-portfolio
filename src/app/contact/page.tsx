import React from "react";

const ContactCard = () => {
	return (
		<div className="max-w-2xl mx-auto py-12 bg-white shadow-lg rounded-lg overflow-hidden">
			<div className="px-4 py-6">
				<h1 className="text-gray-600 text-center font-semibold text-xl">
					Contact Information
				</h1>
				<ul className="mt-6 flex flex-col md:flex-row justify-center align-middle">
					<div className="mx-6">
						<li className="flex items-center py-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-gray-600 ml-1 mr-4">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
								/>
							</svg>
							<span className="text-gray-600"> Los Angeles, California</span>
						</li>
						<li className="flex items-center py-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-gray-600 ml-1 mr-4">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
							<span className="text-gray-600">samuelgerungan@gmail.com</span>
						</li>
						<li className="flex items-center py-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-gray-600 ml-1 mr-4">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
								/>
							</svg>
							<span className="text-gray-600">+1(909)-810-6275</span>
						</li>
					</div>
					<div className="mx-6">
						<li className="flex items-center py-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-gray-600 ml-1 mr-4">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
								/>
							</svg>
							<span className="text-gray-600"> Los Angeles, California</span>
						</li>
						<li className="flex items-center py-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-gray-600 ml-1 mr-4">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
							<span className="text-gray-600">samuelgerungan@gmail.com</span>
						</li>
						<li className="flex items-center py-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-gray-600 ml-1 mr-4">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
								/>
							</svg>
							<span className="text-gray-600">+1(909)-810-6275</span>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default ContactCard;
