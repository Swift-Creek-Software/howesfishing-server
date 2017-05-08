// We don't want to store password with out encryption
var bcrypt = require('bcrypt')

module.exports = {

  schema: false,

  attributes: {
    name: 'string',

    access: {
      // ie: ['admin', 'guide', 'user']
      required: true,
      type: 'array',
    },

    isAdmin: {
      type: 'boolean',
      defaultsTo: 'false',
    },

    password: {
      required: true,
      type: 'string',
    },

    email: {
      type: 'email',
      unique: true,
      required: true,
    },

    encryptedPassword: {
      type: 'string',
    },

    trips: {
      collection: 'trip',
      via: 'users',
    },

    deleted: {
      type: 'boolean',
      defaultsTo: false,
    },

    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject()
      delete obj.encryptedPassword
      return obj
    },
  },
  // Here we encrypt password before creating a User
  beforeCreate: function (values, next) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err)
      bcrypt.hash(values.password, salt, function (err, hash) {
        if (err) return next(err)
        values.encryptedPassword = hash

        delete values.password

        next()
      })
    })
  },

  // Here we encrypt password before updating a User
  beforeUpdate: function (values, next) {
    if (!values || !values.password) return next()

    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err)
      bcrypt.hash(values.password, salt, function (err, hash) {
        if (err) return next(err)
        values.encryptedPassword = hash

        delete values.password

        next()
      })
    })
  },

  comparePassword: function (password, user, cb) {
    bcrypt.compare(password, user.encryptedPassword, function (err, match) {

      if (err) cb(err)
      if (match) {
        cb(null, true)
      } else {
        cb(err)
      }
    })
  },
}


