
module.exports.session = {

  secret: '433c9482750a9c4245d952024c4d26f5',

  // cookie expire time
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  },

  // adapter: 'redis',

  // host: 'localhost',
  // port: 6379,
  // ttl: <redis session TTL in seconds>,
  // db: 0,
  // pass: <redis auth password>,
  // prefix: 'sess:',

  // - OR -

  // adapter: 'mongo',
  // url: 'mongodb://user:password@localhost:27017/dbname', // user, password and port optional

  // collection: 'sessions',
  // stringify: true,
  // mongoOptions: {
  //   server: {
  //     ssl: true
  //   }
  // }

};
