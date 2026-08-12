import React from 'react';

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = "Contact Me",
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
      className={`rounded-full text-white font-medium uppercase tracking-widest cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base flex items-center justify-center whitespace-nowrap ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
