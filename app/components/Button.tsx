import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "secondary",
  size = "md",
  ...props
}) => {
  const baseClasses =
    "rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer select-none active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary/90 text-white border border-transparent shadow-md hover:shadow-primary/20",
    secondary:
      "bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/80 text-white shadow-sm",
    outline:
      "bg-transparent hover:bg-white/10 border border-white/40 text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
