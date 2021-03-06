
module.exports = {
  schema: false,

  attributes: {
	  firstName: 'string',
	  lastName: 'string',
	  phone: 'string',
	  email: 'string',
	  startTime: 'date',
	  endTime: 'date',
	  guests: 'string',
	  cost: 'string',
	  location: 'string',
	  guides: 'array',
	  clientEmailTemplate: 'string',
	  notes: 'string',
	  users: {
	  	collection: 'user',
      via: 'trips',
	  },
    deleted: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
}
