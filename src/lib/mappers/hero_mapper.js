const heroApiDataMapper = heroApiObject => {
	return {
		id: heroApiObject.id,
		image: heroApiObject.image.url,
		name: heroApiObject.name,
		appearance: Object.entries(heroApiObject.appearance)
			.map(elm => (elm[1] === 'null' ? [elm[0], 'Unknow'] : elm))
			.reduce((acc, curr) => {
				return { ...acc, [curr[0]]: curr[1] };
			}, {}),
		biography: heroApiObject.biography,
		connections: heroApiObject.connections,
		powerstats: Object.entries(heroApiObject.powerstats)
			.map(elm => (elm[1] === 'null' ? [elm[0], 'Unknow'] : elm))
			.reduce((acc, curr) => {
				return { ...acc, [curr[0]]: curr[1] };
			}, {}),
		work: heroApiObject.work
	};
};

export default heroApiDataMapper;
