// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually start the server from
process.chdir(__dirname)

// Attempt to import `sails`
var sails
try {
  sails = require('sails')
} catch (e) {
  console.log(`run npm install - doofus!`)
  return
}

var rc
try {
  rc = require('rc')
} catch (e0) {
  try {
    rc = require('sails/node_modules/rc')
  } catch (e1) {
    console.error('WTF - where is the rc module, mate?!')
    rc = function () { return {} }
  }
}

// Start server - bind controllers and routes
// Up up and awayyyyyyyy we go!!!
sails.lift(rc('sails'))
