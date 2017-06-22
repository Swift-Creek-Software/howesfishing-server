module.exports.connections = {

	localDiskDb: {
		adapter: 'sails-disk'
	},

	// prod DB
	mongoApiV1ServerProd: {
		adapter: 'sails-mongo',
		host: 'cluster0-shard-00-00-nsd2f.mongodb.net',
		port: 27017,
		user: 'db_user',
		password: '9etTRUP3ifFCO2Jc',
		database: 'aablefishing-api-v1-dev'
	},

	// dev DB
	mongoApiV1ServerDev: {
		adapter: 'sails-mongo',
		host: 'cluster0-shard-00-00-nsd2f.mongodb.net',
		port: 27017,
		user: 'db_user',
		password: '9etTRUP3ifFCO2Jc',
		database: 'aablefishing-api-v1-dev'
	},

};
