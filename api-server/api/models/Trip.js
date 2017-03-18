
module.exports = {
  schema: false,

  attributes: {
	  clientName: 'string',
	  phone: 'string',
	  email: 'string',
	  date: 'date',
	  guides: {
	      model: 'guide',
      },
	  timeStart: 'date',
	  timeStop: 'date',
	  clients: 'array',// sometimes split between guides // are 'clients' users?
	  cost: 'integer',
	  waterBody: 'string',
	  emailFrom: 'string' //used to show who the email is from
  }
};
