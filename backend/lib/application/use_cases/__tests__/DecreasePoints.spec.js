const DecreasePoints = require('../DecreasePoints')

jest.mock('../../../interfaces/storage')

describe('AddPoints', () => {
    it('Disminución de puntos exitoso', async () => {
        const response = await DecreasePoints('camilo', 20)
        expect(response).toEqual(true)
    })
    it('Error: Base de datos', async () => {
        await expect(DecreasePoints('sebastian', 20)).rejects.toThrow(
            'El usuario no existe en base de datos'
        )
    })
    it('Error: El usuario no se pudo actualizar en la base de datos', async () => {
        await expect(DecreasePoints('laura', 20)).rejects.toThrow('Error')
    })
})
