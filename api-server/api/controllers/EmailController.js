module.exports = {
  send(req, res, next)  {
    EmailService
      .sendEmail(req.allParams())
      .then(data => {
        return res.send(data)
      })
      .catch(err => {
        // error sending email
        return res.badRequest(err)
      })
  }
};
