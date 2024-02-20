import React from "react";

interface Props {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    color,
    children,
    onClick, 

  }) => { 
  return (
    <button 
      className="rounded-md py-3 px-12 text-sm font-medium text-white transition bg-green-500 hover:bg-green-600"
      onClick={onClick}
    >
    {children}
    </button>
  );
}

export default Button;