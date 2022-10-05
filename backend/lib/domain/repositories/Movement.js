class MovementRepository {
    constructor(repository) {
        this.repository = repository
    }

    create(movement) {
        return this.repository.create(movement)
    }
}

module.exports = { MovementRepository }
