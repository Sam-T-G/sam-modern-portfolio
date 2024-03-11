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
              className="h-6 w-6 text-gray-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="text-gray-600">Los Angeles, California</span>
          </li>
          <li className="flex items-center py-2">
            <svg
              className="h-6 w-6 text-gray-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
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
              xmlns="http://www.w3.org/2000/svg"
            >
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
