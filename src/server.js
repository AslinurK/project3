const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes =require('./routes');
const app = express();
const PORT = process.env.PORT || 8000

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

app.use(cors())
app.use(express.json())



try {
	mongoose.connect(process.env.MONGO_DB_SECRET, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}

app.use(routes);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})
