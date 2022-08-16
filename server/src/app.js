const express = require('express')
const env = require('dotenv')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const errorMiddleware = require('./api/v1/middleware/errorMiddleware')
const fileUpload = require('express-fileupload')

const app = express()

// Config
env.config()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

// Route
const user = require('./api/v1/routes/userRoute')

app.use('/api/v1', user)

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app
