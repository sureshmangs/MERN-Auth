const Joi = require('joi');


module.exports = {
    validateSignUp: (schema) => {
        return (req, res, next) => {
            const result = schema.validate(req.body);

            // There is something wrong with the data submitted by the user
            if (result.error) {
                return res.status(400).json(result.error);
            }

            // User data successfully validated
            next();
        }
    },
    schemaSignUp: {
        authSchema: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required().min(8).max(30)
        })
    }
}