const heroApiMapper = heroApiObject => {
	return {
		id: heroApiObject.id,
		image: heroApiObject.image.url,
		name: heroApiObject.name
	};
};

export default heroApiMapper;
