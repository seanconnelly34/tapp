"use client";

import React from "react";

interface SuccessMessageProps {
  message?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message = "User created successfully!",
}) => {
  return (
    <div className='flex flex-col items-center justify-center py-12 px-6'>
      {/* Success Icon */}
      <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4'>
        <svg
          className='w-8 h-8 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 13l4 4L19 7'
          />
        </svg>
      </div>

      {/* Success Message */}
      <h3 className='text-xl font-semibold text-white mb-2'>Success!</h3>
      <p className='text-gray-300 text-center'>{message}</p>
    </div>
  );
};

export default SuccessMessage;
