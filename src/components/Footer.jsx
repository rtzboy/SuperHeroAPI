import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className='mt-auto py-6 text-center'>
			<div>
				<span className='dark:text-white'>Made by </span>
				<span className='italic dark:text-turquoise-100'>
					Jhoseph Poma JDev
				</span>
			</div>
			<ul className='mt-2 flex gap-5 justify-center'>
				{SOCIAL_LINKS.map(link => (
					<li key={link.id}>
						<a href={link.link} target='_blank' rel='noreferrer'>
							<span className='dark:text-violet-100 text-black-600'>
								{link.icon}
							</span>
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
};

const SOCIAL_LINKS = [
	{
		id: 1,
		name: 'Facebook',
		link: 'https://www.facebook.com/joseph.22.12/',
		icon: <BsFacebook size='1.5rem' />
	},
	{
		id: 2,
		name: 'Instagram',
		link: 'https://www.instagram.com/jhoseph2212/',
		icon: <BsInstagram size='1.5rem' />
	},
	{
		id: 3,
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jhoseph-poma-aldave-9b01a01a9/',
		icon: <BsLinkedin size='1.5rem' />
	},
	{
		id: 4,
		name: 'Github',
		link: 'https://github.com/rtzboy',
		icon: <BsGithub size='1.5rem' />
	}
];

export default Footer;
