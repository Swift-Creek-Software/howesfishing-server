const moment = require('moment-timezone')

module.exports = {
	formatEmailDate: (date) => moment(date).tz('America/Denver').format('MMMM DD, YYYY'),
}