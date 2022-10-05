const { RedeemEntity } = require('../../domain/entities')
const { RedeemModel } = require('../../infrastructure/database/models')

class RedeemStorage {
    constructor() {
        this.model = RedeemModel
    }

    async create(redeem) {
        const data = await this.model.create(redeem)

        return data ? new RedeemEntity(data) : null
    }
}

module.exports = { RedeemStorage }
