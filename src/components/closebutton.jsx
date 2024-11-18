import React from 'react';

const CloseButton = ({ onClick }) => {
    return (
        <div
            onClick={onClick} 
            className="flex items-center justify-center bg-[#C8F8E5] rounded-md w-8 h-8 cursor-pointer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-[#217D58] transform transition-transform duration-300 hover:scale-150"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </div>
    );
};

export default CloseButton;

