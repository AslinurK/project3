const express = require('express')
const routes = express.Router();
const UserController = require('./controllers/UserController')

routes.get('/', (req, res) => {
    res.send({ status: 200 })
})


routes.post('/register', UserController.store)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes