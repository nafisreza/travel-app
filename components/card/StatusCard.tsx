interface Props {
	title?: string;
	amount?: string;
	children?: React.ReactNode;
	onClick?: () => void;
	classes?: string;
}

const StatusCard: React.FC<Props> = ({
	title,
	amount,
	children,
	onClick,
	classes,
}) => {
	return (
		<div className='px-3 sm:px-5 py-2 sm:py-3 flex items-center gap-2 sm:gap-4 lg:gap-5 bg-green-500/10 rounded-2xl text-green-500'>
			<div className='flex-shrink-0 h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center rounded-xl bg-gray-900 shadow-gray-900 /50 dark:bg-accent dark:shadow-accent/50'>
				{children}
			</div>
			<div className='flex-grow'>
				<p className='font-medium text-sm md:text-base text-gray-500'>
					{title}
				</p>
				<p className='font-medium text-green-500 dark:text-navy-100'>
					<span className='sm:text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap'>
						{amount}
					</span>
				</p>
			</div>
		</div>
	);
};

export default StatusCard;
