const ErrorComp = ({ err }) => {
	return (
		<div className='w-full h-full text-center py-4 dark:text-blue-200'>{`Error ${err}`}</div>
	);
};

export default ErrorComp;
