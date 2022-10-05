const { Logger } = require('../../infrastructure/logger')

const { UserStorage } = require('../../interfaces/storage')

const { UserRepository } = require('../../domain/repositories')
const { UserEntity } = require('../../domain/entities')

const userRepository = new UserRepository(new UserStorage())
/**
 * Get the available points for a user
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (nameUser) => {
    try {
        const user = await userRepository.getByNameUser(nameUser)

        if (user instanceof UserEntity) {
            return user.points
        }
        return 0
    } catch (error) {
        Logger.crit({
            level: 'crit',
            file: 'GetPoints.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        return Promise.reject(error)
    }
}
