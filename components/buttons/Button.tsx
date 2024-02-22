import React from 'react';

interface Props {
	color?: string;
	children?: React.ReactNode;
	onClick?: () => void;
	classes?: string;
}

const Button: React.FC<Props> = ({ color, children, onClick, classes }) => {
	return (
		<button
			className={`rounded-lg ${classes} font-medium text-white transition bg-green-500 hover:bg-green-600 text-center inline-flex items-center gap-2 mt-4`}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
