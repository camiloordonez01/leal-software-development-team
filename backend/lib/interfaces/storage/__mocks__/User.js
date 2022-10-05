const { UserEntity } = require('../../../domain/entities')
module.exports = class {
    getByNameUser(nameUser) {
        if (nameUser === 'camilo') {
            return new UserEntity({
                nameUser: 'camilo',
                points: 200,
            })
        }
        if (nameUser === 'laura') {
            return new UserEntity({
                nameUser: 'laura',
                points: 180,
            })
        }
        if (nameUser === 'octavio') {
            throw new Error('Error')
        }
        return null
    }
    createUser(user) {
        if (user.nameUser === 'sara') {
            return new UserEntity({
                nameUser: 'sara',
                points: 0,
            })
        }

        if (user.nameUser === 'sebastian') {
            throw new Error('Error')
        }
    }
    updatePoints(user) {
        if (user.nameUser === 'camilo' || user.nameUser === 'sara') {
            return true
        }
        if (user.nameUser === 'laura') {
            throw new Error('Error')
        }
    }
}
