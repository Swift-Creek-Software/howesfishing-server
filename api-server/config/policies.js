
module.exports.policies = {
  '*': true, // Everything is open unless otherwise assigned a policy

  'UserController': {
    'create': true, // We dont need authorization here, allowing public access
    'find': ['isAuthenticated', 'isAdmin', 'addDeletedParam'],
    '*': ['isAuthenticated', 'isAdmin'],
  },

  'AuthController': {
    '*': true, // We dont need authorization here, allowing public access
  },

  'TripController': {
    'find': 'addDeletedParam', // allow anoyone to search for trips
    '*': ['isAuthenticated', 'isAdmin'],
  },

  'GuideController': {
    'find': 'addDeletedParam', // allow anoyone to search for guides
    '*': ['isAuthenticated', 'isAdmin'],
  },

  'EmailController': {
    '*': ['isAuthenticated'],
  },
}
