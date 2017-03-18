
module.exports.blueprints = {
  // automatically create crud routes for controllers
  actions: true,

  // blueprint route to controller methods .find .create etc.
  rest: true,

  // use blueprint routes in url - don't use in production
  shortcuts: false,

  // pluralize endpoints/resources
  pluralize: false,

  // populate query relations
  populate: true,

  // Model.watch() - don't want a socket riot going down in our server
  autoWatch: false,

  // request ORM results/page limit (can be overridden in the request w/ {"limit":50}
  defaultLimit: 30

};
