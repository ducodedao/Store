const mongoose = require('mongoose')

const connectMongoDB = () => {
	mongoose
		.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log('MongoDB connected successfully.')
		})
}

module.exports = connectMongoDB
