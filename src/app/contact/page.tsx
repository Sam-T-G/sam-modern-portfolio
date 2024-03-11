import React from "react";

const ContactCard = () => {
	return (
		<div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
			<div className="px-4 py-6">
				<h1 className="text-gray-600 text-center font-semibold text-xl">
					Contact Information
				</h1>
				<ul className="mt-4">
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
							className="h-6 w-6 text-gray-600 mr-3"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
						<span className="text-gray-600">+1(909)-810-6275</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactCard;
