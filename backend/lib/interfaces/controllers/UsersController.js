const { ResponseHandler } = require('../../infrastructure/handler')

const {
    GetPoints,
    AddPoints,
    DecreasePoints,
} = require('../../application/use_cases')

module.exports = {
    async getPoints(req, _, next) {
        try {
            const { nameUser } = req.params

            next(new ResponseHandler(200, await GetPoints(nameUser)))
        } catch (error) {
            next(error)
        }
    },
    async addPoints(req, _, next) {
        try {
            const { nameUser } = req.params
            const { points, detail } = req.body

            next(
                new ResponseHandler(
                    200,
                    await AddPoints(nameUser, points, detail)
                )
            )
        } catch (error) {
            next(error)
        }
    },
    async decreasePoints(req, _, next) {
        try {
            const { nameUser } = req.params
            const { points } = req.body

            next(
                new ResponseHandler(200, await DecreasePoints(nameUser, points))
            )
        } catch (error) {
            next(error)
        }
    },
}
