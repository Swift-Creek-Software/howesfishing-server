
module.exports = {
  schema: false,

  attributes: {
	  name: 'string',
	  email: 'string',
	  password: 'string',
	  phoneNumber: 'string',
	  location: {
		  type: 'string',
		  enum: ['BIGFORK', 'LAKESIDE']
	  }
  }
};

