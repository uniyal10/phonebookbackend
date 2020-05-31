const express = require("express")
const router = require("./router")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", router)

module.exports = app
