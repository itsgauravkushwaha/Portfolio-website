import React from 'react';

interface LiveProjectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = "Live Project",
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-200 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base flex items-center justify-center whitespace-nowrap ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
