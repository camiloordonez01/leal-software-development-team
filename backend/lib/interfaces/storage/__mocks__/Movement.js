module.exports = class {
    create(movement) {
        if (movement.nameUser === 'camilo') {
            return {
                nameUser: 'camilo',
                points: 20,
                detail: 'Puntos por compras',
            }
        }
        if (movement.nameUser === 'sara') {
            return {
                nameUser: 'sara',
                points: 40,
                detail: 'Puntos por compras',
            }
        }
    }
}
