
module.exports.http = {

  // express middleware
  middleware: {
    order: [
      'startRequestTimer',
      'cookieParser',
      // 'session', // we're using JWT instead of sessions
      'requestLogger',
      'bodyParser',
      'requestBodyLogger',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      '$custom',
      'router',
      'www',
      '404',
      '500'
    ],

    requestLogger: function (req, res, next) {
      console.log("Requested :: ", req.method, req.url)
      console.log(`   from: ${req.headers.referer}`)
      return next()
    },
    
    requestBodyLogger: function (req, res, next) {
      if (req.body) {
        console.log(`body:`, req.body)
      }
      return next()
    },

    bodyParser: require('skipper')({strict: true}),

  },
};
