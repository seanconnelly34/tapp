import React from "react";
import { forms } from "../../utils/styles";

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  required = false,
  children,
  className = "",
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className={forms.label}>
        {label}
        {required && <span className='text-red-400 ml-1'>*</span>}
      </label>
      {children}
      {error && (
        <p className={forms.errorText} role='alert'>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
