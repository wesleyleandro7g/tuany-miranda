import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register?: any;
  hasError?: boolean;
  errorMessage?: string;
}

export function Input({
  label,
  register,
  hasError,
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <div className="relative z-0 w-full">
      <input
        placeholder=" "
        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-primary border-gray-400 lg:border-gray-200 text-gray-800"
        {...rest}
        {...register}
      />
      <label
        htmlFor="name"
        className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >
        {label}
      </label>
      {hasError && (
        <span className="text-sm text-red-600" id="error">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
