"use client";

import React from "react";
import { Button } from "./";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export default function ErrorMessage({
  message,
  onRetry,
  className = "",
}: ErrorMessageProps) {
  return (
    <div className={`text-center p-8 ${className}`}>
      <div className='mb-4'>
        <div className='text-red-500 text-lg mb-2'>⚠️ Error</div>
        <p className='text-gray-300'>{message}</p>
      </div>
      {onRetry && (
        <Button text='Try Again' variant='outline' onClick={onRetry} />
      )}
    </div>
  );
}
