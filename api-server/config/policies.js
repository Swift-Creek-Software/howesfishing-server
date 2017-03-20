
module.exports.policies = {
  '*': true, // Everything is open unless otherwise assigned a policy

  'UserController': {
    'create': true, // We dont need authorization here, allowing public access
    '*': ['isAuthenticated', 'isAdmin'],
  },

  'AuthController': {
    '*': true, // We dont need authorization here, allowing public access
  },

  'TripController': {
    'find': true, // allow anoyone to search for trips
    '*': ['isAuthenticated', 'isAdmin'],
  },

  'GuideController': {
    'find': true, // allow anoyone to search for guides
    '*': ['isAuthenticated', 'isAdmin'],
  },

  'EmailController': {
    '*': ['isAuthenticated'],
  },
}
