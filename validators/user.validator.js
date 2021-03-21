const Joi = require('joi');
const {EMAIL_REGEXP, PASSWORD_REGEXP} = require("../config/regexp.enum");


module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(10),
    email: Joi.string().regex(EMAIL_REGEXP).required(),
    password: Joi.string().regex(PASSWORD_REGEXP).required()
});
