"use client";

import React, { useEffect, useRef } from "react";
import {
  surfaces,
  transitions,
  typography,
  interactive,
} from "../utils/styles";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = "md",
  children,
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closeOnEscape]);

  // Focus management
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300' />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative w-full ${sizeClasses[size]} ${surfaces.modal} shadow-2xl transform ${transitions.transform} ease-out scale-100 opacity-100 max-h-[90vh] flex flex-col`}
        tabIndex={-1}
        role='dialog'
        aria-modal='true'
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className='bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-4 rounded-t-lg flex-shrink-0'>
            <div className='flex items-center justify-between'>
              {title && (
                <h2 id='modal-title' className={typography.h2}>
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className={`${interactive.linkMuted} p-1 rounded-md hover:bg-white/10`}
                  aria-label='Close modal'
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className='flex-1 overflow-y-auto p-6'>{children}</div>
      </div>
    </div>
  );

  // Render modal in portal
  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};

export default Modal;
