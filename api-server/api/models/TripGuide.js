
module.exports = {
	schema: false,

	attributes: {
		trip: {
			model: 'trip'
		},
		guide: {
			model: 'guide'
		},
		clients: 'array' // are 'clients' users?
	}
};

