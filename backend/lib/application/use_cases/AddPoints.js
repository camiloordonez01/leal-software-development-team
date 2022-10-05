const { v4: uuidv4 } = require('uuid')

const { Logger } = require('../../infrastructure/logger')
//const { sendInfo } = require('../../infrastructure/kafka')

const { MovementStorage, UserStorage } = require('../../interfaces/storage')

const {
    MovementRepository,
    UserRepository,
} = require('../../domain/repositories')

const { MovementEntity, UserEntity } = require('../../domain/entities')

const movementRepository = new MovementRepository(new MovementStorage())
const userRepository = new UserRepository(new UserStorage())
/**
 * Add points to the user
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (nameUser, points, detail) => {
    try {
        let user = await userRepository.getByNameUser(nameUser)
        if (!(user instanceof UserEntity)) {
            const userEntity = new UserEntity({
                nameUser,
                points: 0,
            })
            user = await userRepository.createUser(userEntity)
        }

        const movement = new MovementEntity({
            id: uuidv4(),
            nameUser,
            points: Number(points),
            detail,
        })

        await movementRepository.create(movement)
        await userRepository.updatePoints(user, Number(points), 1)

        //sendInfo({ nameUser, points: String(userUpdate.points) })
        return true
    } catch (error) {
        Logger.crit({
            level: 'crit',
            file: 'AddPoints.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        return Promise.reject(error)
    }
}
