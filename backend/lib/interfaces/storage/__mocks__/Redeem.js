module.exports = class {
    create(movement) {
        if (movement.nameUser === 'camilo') {
            return {
                nameUser: 'camilo',
                points: 20,
            }
        }
        if (movement.nameUser === 'sebastian') {
            return {
                nameUser: 'sebastian',
                points: 20,
            }
        }
    }
}
