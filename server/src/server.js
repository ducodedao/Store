const app = require('./app')
const env = require('dotenv')
const connectMongoDB = require('./config/mongoDB')

// Handling Uncaught Exception
process.on('uncaughtException', (err) => {
	console.log(`Error: ${err.message}.`)
	console.log(`Shutting down the server due to Uncaught Exception.`)
	process.exit(1)
})

// Config
env.config()

// Connecting MongoDB
connectMongoDB()

const server = app.listen(process.env.PORT, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT}.`)
})

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
	console.log(`Error: ${err.message}.`)
	console.log(`Shutting down the server due to Unhandled Promise Rejection.`)

	server.close(() => {
		process.exit(1)
	})
})
