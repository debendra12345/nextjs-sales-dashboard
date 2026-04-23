import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  id,
  ...props
}) => {
  const generatedId = id || React.useId();

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={generatedId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={generatedId}
        className={`px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
        }`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
