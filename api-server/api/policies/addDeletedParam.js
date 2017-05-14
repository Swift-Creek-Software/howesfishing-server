/**
 * This policy adds a param deleted = false to the req params
 * for convenience, we do this because we don't actually delete some
 * models instead we mark deleted = true|false
 */
module.exports = function (req, res, next) {
  if (req.method.toLocaleLowerCase() === 'get') {
    req.query.deleted = req.query.hasOwnProperty('deleted') ? req.query.deleted : false
  } else {
    req.body.deleted = req.query.hasOwnProperty('deleted') ? req.body.deleted : false
  }

  return next()
}