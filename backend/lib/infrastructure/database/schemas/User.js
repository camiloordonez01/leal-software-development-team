const dynamoose = require('dynamoose')

const UserSchema = new dynamoose.Schema(
    {
        nameUser: {
            type: String,
            hashKey: true,
            required: true,
        },
        points: {
            type: Number,
            required: true,
            default: '',
        },
    },
    {
        timestamps: {
            createdAt: 'CreateDate',
            updatedAt: 'UpdateDate',
        },
    }
)

module.exports = { UserSchema }
