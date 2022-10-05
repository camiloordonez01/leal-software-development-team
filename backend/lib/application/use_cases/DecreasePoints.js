const { v4: uuidv4 } = require('uuid')

const { Logger } = require('../../infrastructure/logger')
const { ErrorHandler } = require('../../infrastructure/handler')

const { RedeemStorage, UserStorage } = require('../../interfaces/storage')

const {
    RedeemRepository,
    UserRepository,
} = require('../../domain/repositories')

const { RedeemEntity } = require('../../domain/entities')

const redeemRepository = new RedeemRepository(new RedeemStorage())
const userRepository = new UserRepository(new UserStorage())
/**
 * Decrease points to the user
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (nameUser, points) => {
    try {
        let user = await userRepository.getByNameUser(nameUser)
        if (user === null) {
            throw new ErrorHandler(404, 'El usuario no existe en base de datos')
        }
        const redeem = new RedeemEntity({
            id: uuidv4(),
            nameUser,
            points: Number(points),
        })

        await redeemRepository.create(redeem)
        await userRepository.updatePoints(user, Number(points), 0)

        return true
    } catch (error) {
        Logger.crit({
            level: 'crit',
            file: 'DecreasePoints.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        return Promise.reject(error)
    }
}
