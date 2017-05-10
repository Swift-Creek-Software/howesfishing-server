
module.exports = {
  create: function (req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json(401, {err: 'Password doesn\'t match, What a shame!'})
    }

    User.create(req.body).exec(function (err, user) {
      if (err) {
        return res.json(err.status, {err: err})
      }

      // If user created successfuly we return user and token as response
      if (user) {
        // NOTE: payload is { id: user.id, isAdmin: boolean }
        res.json(200, {user: user, token: jwToken.issue({id: user.id, isAdmin: user.isAdmin})})
      }
    })
  },

  update: function (req, res) {

    // verify a user isAdmin or only updating their own user model
    if (!req.token.isAdmin && req.param('id') !== req.token.id) {
      return res.json(401, {err: 'Not authorized'})
    }

    User
      .update(req.param('id'), req.allParams())
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.json(500, { err })
      })
  },
}
