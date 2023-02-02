import LoadingIcon from './icons/LoadingIcon';

const Loading = () => {
	return (
		<div className='w-full h-full flex justify-center items-center'>
			<LoadingIcon className='h-6 animate-spin' />
		</div>
	);
};

export default Loading;
