const dynamoose = require('dynamoose')
dynamoose.aws.ddb.local()

const { MovementSchema } = require('../schemas')

const MovementModel = dynamoose.model('Movement', MovementSchema)

module.exports = { MovementModel }
