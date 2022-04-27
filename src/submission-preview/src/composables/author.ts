export const sortAuthors = (authors: any[], authorList: any[], lastNumber: number) => {
	authors.forEach((author) => {
		if (author?.city || author?.country || author?.institution) {
			const previousItem = authorList.find(
				(_a, _i) =>
					[author.city, author.country, author.institution].toString() ===
					[_a.city, _a.country, _a.institution].toString()
			);
			if (previousItem) {
				author.authorNumber = previousItem.authorNumber;
			} else {
				author.authorNumber = lastNumber + 1;
				lastNumber++;
			}
		} else {
			author.authorNumber = 0;
		}
		authorList.push(author);
	});

	authorList = authorList.sort((a, b) => {
		return a.order - b.order;
	});
};

export const fetchCountries = async (authorLocations: any, authorList: any) => {
	let countries: any[] = [];
	try {
		const response = await fetch(
			"https://meetinghand.s3.eu-central-1.amazonaws.com/assets/resources/countries.json"
		);
		countries = await response.json();
	} catch (error) {
		console.warn(error);
	}
	authorLocations.value = authorList
		.filter(
			(_a: any, _i: any) =>
				_i ===
				authorList.findIndex((__a: any) => __a.authorNumber === _a.authorNumber) &&
				_a.authorNumber > 0
		)
		.map((_a: any) => {
			const country = countries.find(
				(_c) =>
					_a?.country && _c.code.toUpperCase() === _a.country.toUpperCase()
			);
			if (country) {
				_a.country = country.name;
			}
			return {
				authorNumber: _a.authorNumber,
				location: [_a?.institution, _a?.city, _a?.country]
					.filter((_l) => typeof _l === "string")
					.join(", "),
			};
		});
};

export const hasAuthorNumber = (authorLocations: any[]) => {
	if (authorLocations.length > 0) {
		return !authorLocations.every(
			(_a) => _a.location === authorLocations[0].location
		);
	}
	return true;
};
