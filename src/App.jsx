import ContainerModel from './components/ContainerModel';
import Footer from './components/Footer';

const App = () => (
	<div className='min-h-screen flex flex-col dark:bg-black-800 transition-all duration-500 ease-in-out'>
		<ContainerModel />
		<Footer />
	</div>
);

export default App;
