module.exports = {
  send(req, res, next)  {
    const params = req.allParams()

    EmailService
      .sendEmail(params)
      .then(data => {
        return Email.create({ sparkpostResponse: data, params: params})
      })
      .catch(err => {
        // error sending email
        return res.badRequest(err)
      })
  }
};

