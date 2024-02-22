import { ChangeEvent, FC } from 'react';

interface InputProps {
	type: 'text' | 'number' | 'email' | 'password';
	label?: string;
	value?: string | number;
	name?: string;
	placeholder?: string;
	error?: boolean;
	disabled?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	classes?: string;
}

const Input: FC<InputProps> = ({
	type,
	label,
	value,
	name,
	placeholder,
	error,
	disabled,
	onChange,
	classes,
}) => {
	return (
		<div className={`input-wrapper mb-5 ${classes}`}>
			<label htmlFor={label}>{label}</label>
			<input
				className={`w-full rounded-md bg-green-50/80 py-3 px-4 text-base text-body-color placeholder:text-green-500 text-green-500 outline-none focus:border-primary focus-visible:shadow-none `}
				type={type}
				id={label}
				value={value}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				disabled={disabled}
			/>
			{error && <p className='error'>Field cannot be empty!</p>}
		</div>
	);
};

export default Input;
