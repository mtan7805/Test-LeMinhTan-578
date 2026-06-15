import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  tag = false,
  ...props
}) => {
  const sizeClasses = tag
    ? "rounded-lg font-semibold px-3 py-1.5 text-xs border-zinc-800/80"
    : "rounded-xl font-bold px-6 py-2 text-sm border-zinc-700/80";

  return (
    <button
      className={`transition-all flex items-center justify-center gap-2 cursor-pointer select-none active:scale-[0.98] bg-zinc-800/80 hover:bg-zinc-700 border text-white shadow-sm ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


