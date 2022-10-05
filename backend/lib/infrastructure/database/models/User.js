const dynamoose = require('dynamoose')
dynamoose.aws.ddb.local()

const { UserSchema } = require('../schemas')

const UserModel = dynamoose.model('User', UserSchema)

module.exports = { UserModel }
