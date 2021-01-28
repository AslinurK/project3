const express = require('express')
const multer = require('multer')

const UserController = require('./controllers/UserController')
const EventController = require('./controllers/EventController')
const uploadConfig = require('./config/upload')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    res.send({ status: 200 })
})


//event
routes.post('/event')


//user
routes.post('/register', UserController.store)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes