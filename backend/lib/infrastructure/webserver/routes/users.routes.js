const express = require('express')

const UsersRouter = express.Router()

const {
    GetPointsMiddleware,
    AddPointsMiddleware,
    DecreasePointsMiddleware,
} = require('../../../interfaces/middleware')

const {
    getPoints,
    addPoints,
    decreasePoints,
} = require('../../../interfaces/controllers/UsersController')

UsersRouter.get('/:nameUser/points', GetPointsMiddleware, getPoints)

UsersRouter.post('/:nameUser/acumular', AddPointsMiddleware, addPoints)

UsersRouter.post('/:nameUser/redime', DecreasePointsMiddleware, decreasePoints)

module.exports = { UsersRouter }
