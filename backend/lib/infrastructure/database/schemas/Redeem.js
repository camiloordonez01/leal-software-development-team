const dynamoose = require('dynamoose')

const RedeemSchema = new dynamoose.Schema(
    {
        id: {
            type: String,
            hashKey: true,
            required: true,
        },
        nameUser: {
            type: String,
            required: true,
            rangeKey: true,
        },
        points: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: {
            createdAt: 'CreateDate',
            updatedAt: 'UpdateDate',
        },
    }
)

module.exports = { RedeemSchema }
