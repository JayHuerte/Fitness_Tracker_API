const Joi = require('joi');

exports.validateUser = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    age: Joi.number().min(0),
    gender: Joi.string().valid('Male', 'Female', 'Other')
  });
  return schema.validate(data);
};
