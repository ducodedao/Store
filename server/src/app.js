const express = require('express')
const env = require('dotenv')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

// Config
env.config()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app
