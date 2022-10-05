class UserRepository {
    constructor(repository) {
        this.repository = repository
    }

    getByNameUser(nameUser) {
        return this.repository.getByNameUser(nameUser)
    }

    createUser(user) {
        return this.repository.createUser(user)
    }

    updatePoints(nameUser, points, operation) {
        return this.repository.updatePoints(nameUser, points, operation)
    }
}

module.exports = { UserRepository }
