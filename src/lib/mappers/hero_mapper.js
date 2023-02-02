const heroApiDataMapper = heroApiObject => {
	return {
		id: heroApiObject.id,
		image: heroApiObject.image.url,
		name: heroApiObject.name,
		appearance: heroApiObject.appearance,
		biography: heroApiObject.biography,
		connections: heroApiObject.connections,
		powerstats: heroApiObject.powerstats,
		work: heroApiObject.work
	};
};

export default heroApiDataMapper;
