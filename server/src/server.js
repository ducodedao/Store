const app = require('./app')
const env = require('dotenv')
const connectMongoDB = require('./config/mongoDB')

// Config
env.config()

// Connecting MongoDB
connectMongoDB()

const server = app.listen(process.env.PORT, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
