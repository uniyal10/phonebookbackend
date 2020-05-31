const Contact = require("../models/Contact")

exports.add = function (req, res) {
  let contact = new Contact(req.body)
  contact.add()
  if (!contact.errors.length) {
    res.send("congrats")
  } else {
    res.send("there is some errors")
  }
}
