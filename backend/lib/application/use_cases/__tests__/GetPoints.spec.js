const GetPoints = require('../GetPoints')

jest.mock('../../../interfaces/storage')

describe('AddPoints', () => {
    it('Obtención de puntos exitoso', async () => {
        const response = await GetPoints('camilo')
        expect(response).toEqual(200)
    })
    it('Obtención de puntos exitoso 2', async () => {
        const response = await GetPoints('camila')
        expect(response).toEqual(0)
    })
    it('Error: El usuario no se pudo encontrar en la base de datos', async () => {
        await expect(GetPoints('octavio')).rejects.toThrow('Error')
    })
})
