const { MovementEntity } = require('../../domain/entities')
const { MovementModel } = require('../../infrastructure/database/models')

class MovementStorage {
    constructor() {
        this.model = MovementModel
    }

    async create(movement) {
        const data = await this.model.create(movement)

        return data ? new MovementEntity(data) : null
    }
}

module.exports = { MovementStorage }
