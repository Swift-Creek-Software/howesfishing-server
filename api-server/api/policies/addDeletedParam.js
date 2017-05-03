/**
 * This policy adds a param deleted = false to the req params
 * for convenience, we do this because we don't actually delete some
 * models instead we mark deleted = true|false
 */
module.exports = function (req, res, next) {
  req.query.deleted = req.query.hasOwnProperty('deleted') ? req.query.deleted : false

  return next()
}