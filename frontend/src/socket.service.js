import socketIoClient from 'socket.io-client'

let socket

export const initiateSocket = () => {
    socket = socketIoClient.connect('http://localhost:9092')
    console.log(`Connecting socket...`)
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...')
    if (socket) socket.disconnect()
}

export const subscribeToEvent = (event) => {
    socket.on(event, (msg) => {
        console.log('message', msg)
    })
}
