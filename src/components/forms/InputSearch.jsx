const InputSearch = ({ className, ...props }) => (
	<input
		{...props}
		className={`w-full outline-none rounded-lg ${className || ''}`}
		type='text'
	/>
);

export default InputSearch;
