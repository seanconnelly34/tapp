"use client";

import React, { ReactNode } from "react";
import { Modal, Button, SuccessMessage } from "./";

interface FormModalAction {
  text: string;
  variant: "primary" | "secondary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit";
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  showSuccess: boolean;
  successMessage?: string;
  form: ReactNode;
  actions?: FormModalAction[];
  size?: "sm" | "md" | "lg" | "xl";
}

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  title,
  showSuccess,
  successMessage = "Operation completed successfully!",
  form,
  actions = [],
  size = "xl",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={showSuccess ? "Success" : title}
      size={size}
    >
      {showSuccess ? (
        <SuccessMessage message={successMessage} />
      ) : (
        <div className='flex flex-col h-full'>
          {/* Form Content - Scrollable */}
          <div className='flex-1 overflow-y-auto pb-6'>{form}</div>

          {/* Action Buttons - Sticky */}
          {actions.length > 0 && (
            <div className='flex-shrink-0 flex justify-end gap-3 pt-4 mt-6 border-t border-gray-700 bg-zinc-900'>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  text={action.text}
                  variant={action.variant}
                  onClick={
                    action.type === "submit"
                      ? () => {
                          const form = document.querySelector("form");
                          if (form) {
                            form.requestSubmit();
                          }
                        }
                      : action.onClick
                  }
                />
              ))}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default FormModal;
