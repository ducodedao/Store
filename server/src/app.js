const express = require('express')
const env = require('dotenv')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const errorMiddleware = require('./api/v1/middleware/errorMiddleware')

const app = express()

// Config
env.config()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app
