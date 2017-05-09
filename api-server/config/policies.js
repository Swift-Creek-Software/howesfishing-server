
module.exports.policies = {
  '*': true, // Everything is open unless otherwise assigned a policy

  'UserController': {
    'create': true, // We dont need authorization here, allowing public access
    'find': ['isAuthenticated', 'isAdmin', 'addDeletedParam'],
    '*': ['isAuthenticated'],
    'destroy': false,
  },

  'AuthController': {
    'destroy': false,
    '*': true, // We dont need authorization here, allowing public access
  },

  'TripController': {
    'destroy': false,
    'find': 'addDeletedParam', // allow anoyone to search for trips
    '*': ['isAuthenticated', 'isAdmin', 'addDeletedParam'],
  },

  'GuideController': {
    'destroy': false,
    'find': 'addDeletedParam', // allow anoyone to search for guides
    '*': ['isAuthenticated', 'isAdmin', 'addDeletedParam'],
  },

  'EmailController': {
    'destroy': false,
    '*': ['isAuthenticated'],
  },
}
