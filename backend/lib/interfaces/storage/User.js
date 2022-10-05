const { UserEntity } = require('../../domain/entities')

const { UserModel } = require('../../infrastructure/database/models')

class UserStorage {
    constructor() {
        this.model = UserModel
    }

    async getByNameUser(nameUser) {
        const data = await this.model.get(nameUser)

        return data ? new UserEntity(data) : null
    }

    async createUser(user) {
        const data = await this.model.create(user)

        return new UserEntity(data)
    }

    async updatePoints(user, points, operation) {
        let calculation = user.points
        if (operation === 1) {
            user.points = calculation + points
        } else {
            calculation = calculation - points
        }

        const result = await this.model.update({
            nameUser: user.nameUser,
            points: user.points,
        })

        return result ? new UserEntity(result) : null
    }
}

module.exports = { UserStorage }
