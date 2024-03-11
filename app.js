"use strict"

const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 3000

app.use(express.json())

require("express-async-errors")

app.use(require('./src/routes/book.router'))

app.use(require('./src/errorHandler'))
app.listen(PORT, () => console.log("Running: https://lms.kernelist.xyz"));