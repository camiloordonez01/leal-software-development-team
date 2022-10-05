class RedeemRepository {
    constructor(repository) {
        this.repository = repository
    }

    create(redeem) {
        return this.repository.create(redeem)
    }
}

module.exports = { RedeemRepository }
