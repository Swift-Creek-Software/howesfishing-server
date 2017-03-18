
module.exports.http = {

  // express middleware
  middleware: {
    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
      'customLogger',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      '$custom',
      'router',
      'www',
      '404',
      '500'
    ],

    customLogger: function (req, res, next) {
        console.log("Requested :: ", req.method, req.url);
        return next();
    },

    bodyParser: require('skipper')({strict: true}),

  },
  // cache static assets
  cache: 31557600000
};
