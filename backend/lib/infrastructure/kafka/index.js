const kafka = require('kafka-node')

const Producer = kafka.Producer
const client = new kafka.KafkaClient()
const producer = new Producer(client)

producer.on('ready', () => {
    console.log('Producer is ready')
})

producer.on('error', (err) => {
    console.log('Producer is in error state')
    console.log(err)
})

const sendInfo = (info) => {
    const sentMessage = JSON.stringify(info)
    const payloads = [{ topic: 'test', messages: sentMessage, partition: 0 }]

    producer.send(payloads, () => {
        console.log('Producer has sent information')
    })

    return true
}

module.exports = { sendInfo }
/*const Kafka = require('node-rdkafka')
const { event } = require('./eventType')

const stream = Kafka.Producer.createWriteStream(
    {
        'metadata.broker.list': 'localhost:9092',
    },
    {},
    {
        topic: 'test',
    }
)

stream.on('error', (err) => {
    console.error('Error in our kafka stream')
    console.error(err)
})

const sendInfo = (info) => {
    const success = stream.write(event.toBuffer(info))
    if (!success) {
        throw new Error('Error')
    }

    return true
}

stream.close()
module.exports = { sendInfo }*/
