const InputSearch = ({ className, ...props }) => (
	<input
		{...props}
		className={`w-full p-2 outline-none rounded-md my-4 ${className || ''}`}
		type='text'
	/>
);

export default InputSearch;
