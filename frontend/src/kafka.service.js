import KafkaRest from 'kafka-rest'

const kafka = new KafkaRest({ 'url': 'http://localhost:9092' });

kafka.topics.get('test', function (err, topic) {
    console.log('entrooo')
})