const STYLE = {
	active: 'border-b-4 border-indigo-300',
	default: ''
};

const Button = ({ status = 'default', ...props }) => {
	return (
		<button
			{...props}
			className={`rounded-2xl bg-orange-200 px-3 py-1 ${STYLE[status]}`}
		></button>
	);
};

export default Button;
