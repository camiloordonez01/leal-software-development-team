const Joi = require('joi')

const messages = require('../../../messages')

const { Logger } = require('../../infrastructure/logger')
const { ErrorHandler } = require('../../infrastructure/handler')

/**
 * Validate the information when decrease points
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (req, res, next) => {
    try {
        // create schema object
        const schemaBody = Joi.object({
            nameUser: Joi.string().required(),
            points: Joi.number().required(),
        })

        // schema options
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true, // remove unknown props
        }

        // validate request body against schema
        const { error } = schemaBody.validate(
            { ...req.params, ...req.body },
            options
        )

        const messagesError = []
        error?.details.forEach((element) => {
            switch (element.context.key) {
                case 'nameUser':
                    if (element.type === 'any.required') {
                        messagesError.push(messages.NAME_USER_REQUIRED)
                    }
                    break
                case 'points':
                    if (element.type === 'any.required') {
                        messagesError.push(messages.POINTS_REQUIRED)
                    }
                    break
            }
        })

        if (messagesError.length > 0) {
            // on fail return comma separated errors
            throw new ErrorHandler(400, messagesError)
        }
        next()
    } catch (error) {
        Logger.crit({
            level: 'crit',
            file: 'DecreasePointsMiddleware.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        next(error)
    }
}
