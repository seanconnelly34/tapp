"use client";

import { useState } from "react";

interface UseModalWithSuccessOptions {
  autoCloseDelay?: number;
}

export function useModalWithSuccess<T>(
  onSubmit: (data: T) => void,
  options: UseModalWithSuccessOptions = {}
) {
  const { autoCloseDelay = 2000 } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setShowSuccess(false);
  };

  const closeModal = () => {
    setShowSuccess(false);
    setIsOpen(false);
  };

  const handleSubmit = (data: T) => {
    onSubmit(data);
    setShowSuccess(true);

    // Auto-close after specified delay
    setTimeout(() => {
      setShowSuccess(false);
      setIsOpen(false);
    }, autoCloseDelay);
  };

  return {
    isOpen,
    showSuccess,
    openModal,
    closeModal,
    handleSubmit,
  };
}
