
module.exports = {
  schema: false,

  attributes: {
	  name: 'string',
	  emails: 'array',
	  phones: 'array',
	  color: 'string',
	  deleted: {
	  	type: 'boolean',
			defaultsTo: false,
	  },
  },
}