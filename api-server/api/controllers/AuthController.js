module.exports = {
  index: function (req, res) {
    var email = req.param('email')
    var password = req.param('password')

    if (!email || !password) {
      return res.json(401, {err: 'email and password required'})
    }

    User.findOne({ email: email, deleted: false }, function (err, user) {
      if (err) {
        return res.serverError(err)
      } else if (!user) {
        return res.json(401, {err: 'invalid email or password'})
      }

      User.comparePassword(password, user, function (err, valid) {
        if (err) {
          return res.json(403, {err: 'forbidden'})
        }

        if (!valid) {
          return res.json(401, {err: 'invalid email or password'})
        } else {
          res.json({
            user: user,
            token: jwToken.issue({ id : user.id, isAdmin: user.isAdmin }),
          })
        }
      })
    })
  },
}
