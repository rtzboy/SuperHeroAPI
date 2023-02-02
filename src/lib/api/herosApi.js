import heroApiMapper from '../mappers/hero_box_mapper';
import heroApiDataMapper from '../mappers/hero_mapper';

const loadHeroById = async (idHero, signal) => {
	try {
		const resp = await fetch(
			`https://www.superheroapi.com/api.php/${
				import.meta.env.VITE_API_KEY
			}/${idHero}`,
			{ signal }
		);

		if (resp.ok) {
			const { response, error, ...results } = await resp.json();
			if (response === 'success') {
				return {
					response,
					results: [results].map(heroApiDataMapper),
					error
				};
			} else {
				return {
					response,
					results: undefined,
					error
				};
			}
		}
		return {
			response: 'error',
			statusCode: resp.status
		};
	} catch (error) {
		return { response: 'failed', error };
	}
};

const loadBoxByName = async (name, signal) => {
	try {
		const resp = await fetch(
			`https://www.superheroapi.com/api.php/${
				import.meta.env.VITE_API_KEY
			}/search/${name}`,
			{ signal }
		);

		if (resp.ok) {
			const { response, results, error } = await resp.json();

			if (response === 'success') {
				return {
					response,
					results: results.map(heroApiMapper),
					error
				};
			} else {
				return {
					response,
					results: undefined,
					error
				};
			}
		}
		return {
			response: 'error',
			statusCode: resp.status
		};
	} catch (error) {
		return { response: 'failed', error };
	}
};

export { loadHeroById, loadBoxByName };
