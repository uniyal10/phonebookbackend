const userCollection = require("../db").collection("list")

let Contact = function (data) {
  this.data = data
  this.errors = []
}

Contact.prototype.add = function () {
  userCollection.insertOne(this.data)
}

module.exports = Contact
