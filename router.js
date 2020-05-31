const express = require("express")
const router = express.Router()
const contactController = require("./controllers/contactContoller")
const userController = require("./db").collection("list")
const mongodb = require("mongodb")

router.post("/add", contactController.add)
router.get("/", (req, res) => {
  userController.find().toArray((err, list) => {
    if (err) {
      console.log("something wrong")
    } else {
      res.send(list)
    }
  })
})

router.post("/edit", (req, res) => {
  console.log(req.body)
  userController.findOneAndUpdate({ _id: new mongodb.ObjectID(req.body.id) }, { $set: { name: req.body.name, date: req.body.date, number: req.body.number, email: req.body.email } }, (err, data) => {
    if (err) {
      console.log("something wrong")
    } else {
      console.log("update sucessfully")
      res.redirect("/")
    }
  })
})
router.post("/delete", (req, res) => {
  console.log(req.body.id)
  userController.deleteOne({ _id: new mongodb.ObjectID(req.body.id) }, (err, data) => {
    res.send("sucessfull")
  })
})

module.exports = router
