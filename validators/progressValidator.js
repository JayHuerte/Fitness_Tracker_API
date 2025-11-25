const Joi = require('joi');

exports.validateProgress = (data) => {
  const schema = Joi.object({
    user: Joi.string().required(),
    date: Joi.date(),
    weight: Joi.number().min(0),
    bodyFat: Joi.number().min(0).max(100),
    notes: Joi.string().allow('')
  });
  return schema.validate(data);
};
