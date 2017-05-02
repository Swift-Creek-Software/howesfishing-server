
module.exports = {
  schema: false,

  attributes: {
	  firstName: 'string',
	  lastName: 'string',
	  phone: 'string',
	  email: 'string',
	  startTime: 'date',
	  endTime: 'date',
	  guests: 'number',
	  cost: 'number',
	  location: {
	  	model: 'location',
	  },
	  guides: 'json',
	  clientEmailTemplate: 'string',
	  notes: 'string',
	  users: {
	  	collection: 'user',
      via: 'trips',
	  },
  }
}
