import React from 'react';

const Button = ({ children, onClick, className }) => {
    return (
        <button 
            className={`flex justify-center items-center bg-[#67AA8F] text-white px-4 py-2 rounded hover:bg-[#457D67] ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
