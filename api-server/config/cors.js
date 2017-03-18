
module.exports.cors = {
  // allow cors
  allRoutes: true,
  // where to allow from
  // origin: '*',
  origin: `http://dev.aablfishing.com, 
          https://dev.aablfishing.com, 
          http://www.aablfishing.com, 
          https://www.aablfishing.com,
          https://aablfishing.com,
          http://fiddle.jshell.net
          `,

  // allow cookies to be shared across sites
  credentials: true,

  // which methods for cors requests
  methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',

  // headers allowed with cors
  // todo: add auth token header here
  headers: 'content-type'

};
