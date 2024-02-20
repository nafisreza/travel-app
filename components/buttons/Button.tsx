import React from "react";

interface Props {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  classes: string
}

const Button: React.FC<Props> = ({ 
    color,
    children,
    onClick, 
    classes
  }) => { 
  return (
    <button 
      className={` rounded-md ${classes} text-sm font-medium text-white transition bg-green-500 hover:bg-green-600 `}
      onClick={onClick}
    >
    {children}
    </button>
  );
}

export default Button;