const loadHeroById = async (idHero, signal) => {
	try {
		const res = await fetch(
			`https://www.superheroapi.com/api.php/5400884153312070/${idHero}`,
			{ signal }
		);
		const data = await res.json();
		return data;
	} catch (error) {
		return {
			data: {
				error: 'something wrong!!'
			}
		};
	}
};

const loadBoxByName = async (name, signal) => {
	try {
		const res = await fetch(
			`https://www.superheroapi.com/api.php/5400884153312070/search/${name}`,
			{ signal }
		);
		const data = await res.json();
		return data;
	} catch (error) {
		return {
			data: {
				error: 'something wrong!!'
			}
		};
	}
};

export { loadHeroById, loadBoxByName };
