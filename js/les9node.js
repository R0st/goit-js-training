const Joi = require('joi');     //валидация

const passwordSchema = Joi.string().min(3).max(10).alphanum(1);
console.log(passwordSchema.validate('q'));