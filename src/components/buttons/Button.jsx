const Button = ({ value, ...props }) => {
	return (
		<div className='group relative'>
			<button
				{...props}
				className='relative rounded-t-lg bg-orange-200 px-3 py-1'
			></button>
			<p className='absolute bottom-0 w-0 h-1 bg-orange-400 transition-all duration-500 ease-in-out group-hover:w-full'></p>
		</div>
	);
};

export default Button;
