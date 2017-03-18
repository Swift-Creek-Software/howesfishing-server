module.exports.connections = {

  localDiskDb: {
    adapter: 'sails-disk'
  },

  // prod DB
  mongoApiV1ServerProd: {
    adapter: 'sails-mongo',
    host: 'ds133158.mlab.com',
    port: 33158,
    user: 'db_user',
    password: '99Fish/99',
    database: 'aablefishing-api-v1'
  },

  // dev DB
  mongoApiV1ServerDev: {
    adapter: 'sails-mongo',
    host: 'ds133158.mlab.com',
    port: 33158,
    user: 'db_user',
    password: '99Fish/99',
    database: 'aablefishing-api-v1-dev'
  },

};
