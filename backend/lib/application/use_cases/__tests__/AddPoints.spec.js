const AddPoints = require('../AddPoints')

jest.mock('../../../interfaces/storage')

describe('AddPoints', () => {
    it('Adición de puntos exitoso', async () => {
        const response = await AddPoints('camilo', 20, 'Puntos por compras')
        expect(response).toEqual(true)
    })
    it('Adición de puntos exitoso 2', async () => {
        const response = await AddPoints('sara', 40, 'Puntos por compras')
        expect(response).toEqual(true)
    })
    it('Error: El usuario no se pudo crear en la base de datos', async () => {
        await expect(
            AddPoints('sebastian', 20, 'Puntos por compras')
        ).rejects.toThrow('Error')
    })
})
