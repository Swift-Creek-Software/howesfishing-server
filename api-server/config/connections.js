module.exports.connections = {

	localDiskDb: {
		adapter: 'sails-disk'
	},

	// prod DB
	mongoApiV1ServerProd: {
		adapter: 'sails-mongo',
		host: 'ds149743.mlab.com',
		port: 49743,
		user: 'db_user',
		password: 'Overlord1',
		database: 'aablefishing-db'
	},

	// dev DB
	mongoApiV1ServerDev: {
		adapter: 'sails-mongo',
		host: 'ds149743.mlab.com',
		port: 49743,
		user: 'db_user',
		password: 'Overlord1',
		database: 'aablefishing-db'
	},

};
