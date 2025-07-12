import React, { forwardRef } from "react";
import { forms } from "../../utils/styles";

interface TextInputProps {
  placeholder?: string;
  type?: "text" | "email" | "tel" | "url";
  error?: boolean;
  className?: string;
}

const TextInput = forwardRef<
  HTMLInputElement,
  TextInputProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { placeholder, type = "text", error = false, className = "", ...props },
    ref
  ) => {
    const errorClasses = error ? forms.inputError : forms.inputNormal;

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`${forms.inputBase} ${errorClasses} ${className}`.trim()}
        {...props}
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
