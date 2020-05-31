const mongodb = require("mongodb")
const dotenv = require("dotenv")
dotenv.config()

mongodb.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log("having some error")
  }
  module.exports = client.db()
  console.log("connected sucessfully")
  const app = require("./app")
  app.listen(process.env.PORT)
})
