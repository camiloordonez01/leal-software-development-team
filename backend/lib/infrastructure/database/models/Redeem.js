const dynamoose = require('dynamoose')
dynamoose.aws.ddb.local()

const { RedeemSchema } = require('../schemas')

const RedeemModel = dynamoose.model('Redeem', RedeemSchema)

module.exports = { RedeemModel }
